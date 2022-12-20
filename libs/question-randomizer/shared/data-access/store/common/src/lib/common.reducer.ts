import { createReducer, on } from '@ngrx/store';
import { showDialog } from './common.actions';

export interface CommonState {
  isDialogVisible: boolean;
}

export const initialState: CommonState = { isDialogVisible: false };

export const commonReducer = createReducer(
  initialState,
  on(showDialog, (state, { showDialog }) => ({
    ...state,
    isDialogVisible: showDialog,
  }))
);
