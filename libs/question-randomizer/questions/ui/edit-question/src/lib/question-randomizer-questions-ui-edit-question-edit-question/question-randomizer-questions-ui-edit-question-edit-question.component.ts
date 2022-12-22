import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {
  markFormGroupTouched,
  regexErrors,
} from '@my-projects-nx/shared/util/utils';
import { QuestionsFacade } from '@my-projects-nx/question-randomizer/questions/data-access/store';
import { DictionariesFacade } from '@my-projects-nx/question-randomizer/shared/data-access/store/dictionaries';
import { Question } from '@my-projects-nx/question-randomizer/shared/util/models/frontend';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SharedUiCrtControlsFormFieldComponent } from '@my-projects-nx/shared/ui/crt/controls/form-field';
import { SharedUiCrtButtonsButtonComponent } from '@my-projects-nx/shared/ui/crt/buttons/button';
import { SharedUiCrtControlsSelectComponent } from '@my-projects-nx/shared/ui/crt/controls/select';
import { CommonModule } from '@angular/common';
import { SharedUiCrtControlsInputComponent } from '@my-projects-nx/shared/ui/crt/controls/input';

@Component({
  selector:
    'my-projects-nx-question-randomizer-questions-ui-edit-question-edit-question',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedUiCrtControlsFormFieldComponent,
    SharedUiCrtButtonsButtonComponent,
    SharedUiCrtControlsSelectComponent,
    SharedUiCrtControlsInputComponent,
  ],
  templateUrl:
    './question-randomizer-questions-ui-edit-question-edit-question.component.html',
  styleUrls: [
    './question-randomizer-questions-ui-edit-question-edit-question.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerQuestionsUiEditQuestionComponent {
  form: UntypedFormGroup;
  regexErrors = regexErrors;
  categoryControlItems$ = this._dictionariesFacade.categoryControlItems$;
  qualificationControlItems$ =
    this._dictionariesFacade.qualificationControlItems$;

  constructor(
    private _fb: UntypedFormBuilder,
    private _questionsFacade: QuestionsFacade,
    private _dictionariesFacade: DictionariesFacade,
    private _dialogRef: MatDialogRef<QuestionRandomizerQuestionsUiEditQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { question: Question }
  ) {
    this.form = this._fb.group({
      question: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
      answer: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required],
        },
      ],
      answerPl: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required],
        },
      ],
      categoryId: [null, { validators: [Validators.required] }],
      qualificationId: [null],
      isActive: [null],
    });

    if (this.data.question) {
      this.form.patchValue(this.data.question);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.data.question) {
        const updatedQuestion = { ...this.data.question, ...this.form.value };
        this._questionsFacade.updateQuestion(updatedQuestion);
      } else {
        this._questionsFacade.createQuestion(this.form.value);
      }
      this._dialogRef.close();
    } else {
      markFormGroupTouched(this.form);
    }
  }
}
