import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { questionRandomizerFeatureShellRoutes } from './lib.routes';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(questionRandomizerFeatureShellRoutes),
  ],
  exports: [RouterModule],
})
export class QuestionRandomizerShellFeatureModule {}
