import { Route } from '@angular/router';
import { AuthGuard } from '@my-projects-nx/question-randomizer/shared/util/guards';
import { QuestionRandomizerShellFeatureComponent } from './question-randomizer-shell-feature.component';

export const questionRandomizerFeatureShellRoutes: Route[] = [
  {
    path: '',
    component: QuestionRandomizerShellFeatureComponent,
    children: [
      // {
      //   path: 'auth',
      //   loadChildren: () =>
      //     import('@my-projects-nx/question-randomizer/auth/feature/shell').then(
      //       (m) => m.QuestionRandomizerAuthFeatureShellModule
      //     ),
      // },
      {
        path: '',
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'randomization',
          },
          // {
          //   path: 'questions',
          //   loadChildren: () =>
          //     import('../questions/questions.module').then(
          //       (m) => m.QuestionsModule
          //     ),
          // },
          // {
          //   path: 'demo',
          //   loadChildren: () =>
          //     import('../demo/demo.module').then((m) => m.DemoModule),
          // },
          {
            path: 'auth',
            loadChildren: () =>
              import(
                '@my-projects-nx/question-randomizer/auth/feature/shell'
              ).then((m) => m.QuestionRandomizerAuthFeatureShellModule),
          },
          {
            path: 'randomization',
            loadChildren: () =>
              import(
                '@my-projects-nx/question-randomizer/randomization/feature/shell'
              ).then(
                (m) => m.QuestionRandomizerRandomizationFeatureShellModule
              ),
            canActivate: [AuthGuard],
          },
          // {
          //   path: 'static',
          //   loadChildren: () =>
          //     import('../static/static.module').then((m) => m.StaticModule),
          // },
        ],
      },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: '/static/404' },
];
