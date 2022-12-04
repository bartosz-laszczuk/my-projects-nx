import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { questionRandomizerAuthFeatureShellRoutes } from './lib.routes';
import { QuestionRandomizerAuthFeatureShellComponent } from './question-randomizer-auth-feature-shell.component';
import { SharedDataAccessAuthStoreModule } from '@my-projects-nx/shared/data-access/auth/store';

@NgModule({
  declarations: [QuestionRandomizerAuthFeatureShellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(questionRandomizerAuthFeatureShellRoutes),
    SharedDataAccessAuthStoreModule,
  ],
})
export class QuestionRandomizerAuthFeatureShellModule {}
