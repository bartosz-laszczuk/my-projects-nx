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
import { getAppConfigProvider } from '@my-projects-nx/question-randomizer/app-config';
import { environment } from '@question-randomizer/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NotificationModule } from '@my-projects-nx/question-randomizer/shared/util/notification';
import { QuestionRandomizerAuthDataAccessStoreModule } from '@my-projects-nx/question-randomizer/auth/data-access/store';

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
    QuestionRandomizerAuthDataAccessStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    NotificationModule.forRoot(),
    EffectsModule.forRoot(/*[CommonEffects, DictionariesEffects, UserEffects]*/),
    StoreRouterConnectingModule.forRoot(),
    SharedUiCrtLayoutComponent,
    QuestionRandomizerShellUiHeaderComponent,
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
  ],
  exports: [RouterModule],
  providers: [getAppConfigProvider(environment)],
})
export class QuestionRandomizerShellFeatureModule {}
