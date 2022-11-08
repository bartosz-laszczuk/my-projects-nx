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
      // {
      //   path: 'registration',
      //   loadChildren: () =>
      //     import('./registration/registration.module').then(
      //       (m) => m.RegistrationModule
      //     ),
      //   canActivate: [UnauthGuard],
      // },
      // {
      //   path: 'email-confirm',
      //   loadChildren: () =>
      //     import('./email-confirm/email-confirm.module').then(
      //       (m) => m.EmailConfirmModule
      //     ),
      //   canActivate: [AuthGuard],
      // },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ],
    component: QuestionRandomizerAuthFeatureShellComponent,
  },
];
