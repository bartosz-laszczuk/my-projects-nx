import { createAction, props } from '@ngrx/store';

export const showDialog = createAction(
  '[App] Show Dialog',
  props<{ showDialog: boolean }>()
);

export const handleError = createAction(
  '[App] Handle Error',
  props<{ err: any }>()
);

export const empty = createAction('[App] Empty');
