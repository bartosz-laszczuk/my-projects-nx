import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {
  getIsLoading,
  signInEmail,
} from '@my-projects-nx/question-randomizer/auth/data-access/store';
import { SharedUiCrtButtonsButtonComponent } from '@my-projects-nx/shared/ui/crt/buttons/button';
import { SharedUiCrtControlsFormFieldComponent } from '@my-projects-nx/shared/ui/crt/controls/form-field';
import { SharedUiCrtControlsInputComponent } from '@my-projects-nx/shared/ui/crt/controls/input';
import { SharedUiCrtControlsPasswordComponent } from '@my-projects-nx/shared/ui/crt/controls/password';
import { SharedUiCrtIndicatorsSpinnerComponent } from '@my-projects-nx/shared/ui/crt/indicators/spinner';
import { EmailPasswordCredentials } from '@my-projects-nx/question-randomizer/shared/util/models';
import {
  markFormGroupTouched,
  regex,
  regexErrors,
} from '@my-projects-nx/shared/util/utils';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-projects-nx-shared-question-randomizer-auth-feature-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedUiCrtControlsFormFieldComponent,
    SharedUiCrtControlsInputComponent,
    SharedUiCrtControlsPasswordComponent,
    SharedUiCrtButtonsButtonComponent,
    SharedUiCrtIndicatorsSpinnerComponent,
  ],
  templateUrl: './shared-question-randomizer-auth-feature-login.component.html',
  styleUrls: ['./shared-question-randomizer-auth-feature-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerAuthFeatureLoginComponent {
  loading$: Observable<boolean> = this.store.pipe(select(getIsLoading));

  form: UntypedFormGroup;
  regexErrors = regexErrors;

  constructor(private _fb: UntypedFormBuilder, private store: Store) {
    this.form = this._fb.group({
      email: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.maxLength(128),
            Validators.pattern(regex.email),
          ],
        },
      ],
      password: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
    });
  }

  public onSubmit(): void {
    if (this.form.valid) {
      const value = this.form.value;

      const credentials: EmailPasswordCredentials = {
        email: value.email,
        password: value.password,
      };
      // @my-projects-nx/question-randomizer/auth/data-access/store
      this.store.dispatch(signInEmail({ credentials }));
    } else {
      markFormGroupTouched(this.form);
    }
  }
}
