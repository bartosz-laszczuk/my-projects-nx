import { isDevMode, NgModule } from '@angular/core';
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
import { QuestionRandomizerSharedDataAccessStoreDictionariesModule } from '@my-projects-nx/question-randomizer/shared/data-access/store/dictionaries';
import { QuestionRandomizerSharedDataAccessStoreCommonModule } from '@my-projects-nx/question-randomizer/shared/data-access/store/common';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [QuestionRandomizerShellFeatureComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(questionRandomizerFeatureShellRoutes),
    StoreModule.forRoot(
      {},
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
    EffectsModule.forRoot(),
    StoreRouterConnectingModule.forRoot(),
    SharedUiCrtLayoutComponent,
    QuestionRandomizerShellUiHeaderComponent,
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    QuestionRandomizerSharedDataAccessStoreCommonModule,
    QuestionRandomizerSharedDataAccessStoreDictionariesModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  exports: [RouterModule],
  providers: [getAppConfigProvider(environment)],
})
export class QuestionRandomizerShellFeatureModule {}
