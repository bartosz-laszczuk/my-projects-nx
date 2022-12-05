import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { questionRandomizerAuthFeatureShellRoutes } from './lib.routes';
import { QuestionRandomizerAuthFeatureShellComponent } from './question-randomizer-auth-feature-shell.component';
import { QuestionRandomizerAuthDataAccessStoreModule } from '@my-projects-nx/question-randomizer/auth/data-access/store';

@NgModule({
  declarations: [QuestionRandomizerAuthFeatureShellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(questionRandomizerAuthFeatureShellRoutes),
    QuestionRandomizerAuthDataAccessStoreModule,
  ],
})
export class QuestionRandomizerAuthFeatureShellModule {}
