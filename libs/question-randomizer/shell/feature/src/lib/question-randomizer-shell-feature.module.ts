import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { questionRandomizerFeatureShellRoutes } from './lib.routes';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { QuestionRandomizerShellUiHeaderComponent } from '@my-projects-nx/question-randomizer/shell/ui/header';
import { QuestionRandomizerShellFeatureComponent } from './question-randomizer-shell-feature.component';
import { SharedUiCrtLayoutComponent } from '@my-projects-nx/shared/ui/crt/layout';

@NgModule({
  declarations: [QuestionRandomizerShellFeatureComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(questionRandomizerFeatureShellRoutes),
    StoreModule.forRoot(
      {
        // common: commonReducer,
        // dictionaries: dictionariesReducer,
        // user: userReducer,
      },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // logOnly: environment.production,
    }),
    // EffectsModule.forRoot([CommonEffects, DictionariesEffects, UserEffects]),
    StoreRouterConnectingModule.forRoot(),
    SharedUiCrtLayoutComponent,
    QuestionRandomizerShellUiHeaderComponent,
  ],
  exports: [RouterModule],
})
export class QuestionRandomizerShellFeatureModule {}
