import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '@my-projects-nx/question-randomizer/shared/util/models/frontend';
import { SharedUiCrtButtonsButtonComponent } from '@my-projects-nx/shared/ui/crt/buttons/button';

@Component({
  selector: 'my-projects-nx-question-randomizer-questions-ui-question-item',
  standalone: true,
  imports: [CommonModule, SharedUiCrtButtonsButtonComponent],
  templateUrl:
    './question-randomizer-questions-ui-question-item.component.html',
  styleUrls: [
    './question-randomizer-questions-ui-question-item.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerQuestionsUiQuestionItemComponent {
  @Input() item: Question;

  @Output() edit = new EventEmitter<Question>();
  @Output() delete = new EventEmitter<string>();

  onEdit(question: Question): void {
    this.edit.emit(question);
  }

  // onDelete(id: string): void {
  //   this.delete.emit(id);
  // }

  // $event.stopPropagation() for unit testing purposes
  onDelete($event: any, id: string): void {
    $event.stopPropagation();
    this.delete.emit(id);
  }
}
