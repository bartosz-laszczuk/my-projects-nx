import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiTableGenericTableV2Module } from '@my-projects-nx/shared/ui/table/generic-table-v2';
import { QuestionRandomizerQuestionsUiTableComponent } from './question-randomizer-questions-ui-table.component';
import { SharedUiTablePaginatorModule } from '@my-projects-nx/shared/ui/table/paginator';
import { SharedUiCrtControlsFormFieldComponent } from '@my-projects-nx/shared/ui/crt/controls/form-field';
import { SharedUiCrtControlsInputComponent } from '@my-projects-nx/shared/ui/crt/controls/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuestionRandomizerQuestionsUiTableComponent],
  imports: [
    CommonModule,
    SharedUiTableGenericTableV2Module,
    SharedUiTablePaginatorModule,
    SharedUiCrtControlsFormFieldComponent,
    SharedUiCrtControlsInputComponent,
    FormsModule,
  ],
  exports: [QuestionRandomizerQuestionsUiTableComponent],
})
export class QuestionRandomizerQuestionsUiTableModule {}
