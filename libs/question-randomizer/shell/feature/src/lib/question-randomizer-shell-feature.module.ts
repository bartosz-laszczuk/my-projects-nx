import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { questionRandomizerFeatureShellRoutes } from './lib.routes';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
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
  ],
  exports: [RouterModule],
})
export class QuestionRandomizerShellFeatureModule {}
