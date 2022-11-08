import { Route } from '@angular/router';
import { AuthGuard, UnauthGuard } from '@my-projects-nx/shared/util/guards';
import { QuestionRandomizerAuthFeatureShellComponent } from './question-randomizer-auth-feature-shell.component';

export const questionRandomizerAuthFeatureShellRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('@my-projects-nx/question-randomizer/auth/feature/login').then(
            (x) => x.QuestionRandomizerAuthFeatureLoginComponent
          ),
        canActivate: [UnauthGuard],
      },
      {
        path: 'registration',
        loadChildren: () =>
          import(
            '@my-projects-nx/question-randomizer/auth/feature/registration'
          ).then((m) => m.QuestionRandomizerAuthFeatureRegistrationComponent),
        canActivate: [UnauthGuard],
      },
      {
        path: 'email-confirm',
        loadChildren: () =>
          import(
            '@my-projects-nx/question-randomizer/auth/feature/email-confirm'
          ).then((m) => m.QuestionRandomizerAuthFeatureEmailConfirmComponent),
        canActivate: [AuthGuard],
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ],
    component: QuestionRandomizerAuthFeatureShellComponent,
  },
];
