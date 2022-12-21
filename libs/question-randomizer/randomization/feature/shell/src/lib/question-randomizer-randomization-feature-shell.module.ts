import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { questionRandomizerRandomizationFeatureShellRoutes } from './lib.routes';
import { QuestionRandomizerRandomizationFeatureShellComponent } from './question-randomizer-randomization-feature-shell.component';
import { SharedUiCrtButtonsButtonComponent } from '@my-projects-nx/shared/ui/crt/buttons/button';
import { SharedUiCrtControlsCheckboxesComponent } from '@my-projects-nx/shared/ui/crt/controls/checkboxes';
import { QuestionRandomizerRandomizationDataAccessStoreModule } from '@my-projects-nx/question-randomizer/randomization/data-access/store';
import { QuestionRandomizerQuestionsDataAccessStoreModule } from '@my-projects-nx/question-randomizer/questions/data-access/store';
import { SharedUiCrtIndicatorsSectionComponent } from '@my-projects-nx/shared/ui/crt/indicators/section';

@NgModule({
  declarations: [QuestionRandomizerRandomizationFeatureShellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(questionRandomizerRandomizationFeatureShellRoutes),
    SharedUiCrtButtonsButtonComponent,
    SharedUiCrtControlsCheckboxesComponent,
    QuestionRandomizerRandomizationDataAccessStoreModule,
    QuestionRandomizerQuestionsDataAccessStoreModule,
    SharedUiCrtIndicatorsSectionComponent,
    // ProgressBarModule,
  ],
})
export class QuestionRandomizerRandomizationFeatureShellModule {}
