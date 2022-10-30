import { Route } from '@angular/router';
import { QuestionRandomizerShellUiLayoutComponent } from '@my-projects-nx/question-randomizer/shell/ui/layout';

export const questionRandomizerFeatureShellRoutes: Route[] = [
  {
    path: '',
    component: QuestionRandomizerShellUiLayoutComponent,
    //   {
    //     path: 'auth',
    //     loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
    //   },
    //   {
    //     path: '',
    //     children: [
    //       {
    //         path: '',
    //         pathMatch: 'full',
    //         redirectTo: 'randomization',
    //       },
    //       {
    //         path: 'questions',
    //         loadChildren: () =>
    //           import('../questions/questions.module').then(
    //             (m) => m.QuestionsModule
    //           ),
    //       },
    //       {
    //         path: 'demo',
    //         loadChildren: () =>
    //           import('../demo/demo.module').then((m) => m.DemoModule),
    //       },
    //       {
    //         path: 'auth',
    //         loadChildren: () =>
    //           import('../auth/auth.module').then((m) => m.AuthModule),
    //       },
    //       {
    //         path: 'randomization',
    //         loadChildren: () =>
    //           import('../randomization/randomization.module').then(
    //             (m) => m.RandomizationModule
    //           ),
    //         canActivate: [AuthGuard],
    //       },
    //       {
    //         path: 'static',
    //         loadChildren: () =>
    //           import('../static/static.module').then((m) => m.StaticModule),
    //       },
    //     ],
    //   },
  },
  //   { path: '**', pathMatch: 'full', redirectTo: '/static/404' },
];
