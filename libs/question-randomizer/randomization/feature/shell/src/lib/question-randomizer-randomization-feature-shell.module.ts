import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { questionRandomizerRandomizationFeatureShellRoutes } from './lib.routes';
import { QuestionRandomizerRandomizationFeatureShellComponent } from './question-randomizer-randomization-feature-shell.component';

@NgModule({
  declarations: [QuestionRandomizerRandomizationFeatureShellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(questionRandomizerRandomizationFeatureShellRoutes),
    // ButtonsModule,
    // CheckboxesModule,
    // RandomizationStateModule,
    // QuestionsStateModule,
    // ProgressBarModule,
    // SectionModule,
  ],
  providers: [
    // RandomizationService,
    // SelectedCategoryListService,
    // UsedQuestionListService,
    // RandomizationFacade,
    // RandomizationMapperService,
    // UsedQuestionMapperService,
  ],
})
export class QuestionRandomizerRandomizationFeatureShellModule {}
