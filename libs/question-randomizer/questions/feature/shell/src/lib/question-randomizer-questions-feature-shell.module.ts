import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionRandomizerQuestionsFeatureShellComponent } from './question-randomizer-questions-feature-shell.component';
import { QuestionRandomizerQuestionsUiEditQuestionComponent } from '@my-projects-nx/question-randomizer/questions/ui/edit-question';
import { QuestionRandomizerQuestionsUiQuestionItemComponent } from '@my-projects-nx/question-randomizer/questions/ui/question-item';
import { SharedUiCrtButtonsButtonComponent } from '@my-projects-nx/shared/ui/crt/buttons/button';
import { RouterModule } from '@angular/router';
import { questionRandomizerQuestionsFeatureShellRoutes } from './lib.routes';
import { SharedUiTableGenericTableTempModule } from '@my-projects-nx/shared/ui/table/generic-table';
import { QuestionRandomizerQuestionsDataAccessStoreModule } from '@my-projects-nx/question-randomizer/questions/data-access/store';

@NgModule({
  declarations: [QuestionRandomizerQuestionsFeatureShellComponent],
  imports: [
    CommonModule,
    QuestionRandomizerQuestionsDataAccessStoreModule,
    SharedUiCrtButtonsButtonComponent,
    QuestionRandomizerQuestionsUiQuestionItemComponent,
    QuestionRandomizerQuestionsUiEditQuestionComponent,
    RouterModule.forChild(questionRandomizerQuestionsFeatureShellRoutes),
    SharedUiTableGenericTableTempModule,
    // HttpClientModule,
    // QuestionsStateModule,
    // MatDialogModule,
    // ReactiveFormsModule,
    // InputModule,
    // FormFieldModule,
    // ButtonModule,
    // SelectModule,
    // GenericTableModule,
  ],
})
export class QuestionRandomizerQuestionsFeatureShellModule {}
