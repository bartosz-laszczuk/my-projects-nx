import { Category } from '@my-projects-nx/question-randomizer/randomization/util/models/frontend';
import { createReducer, on } from '@ngrx/store';
import {
  loadSelectedCategoryList,
  loadSelectedCategoryListError,
  loadSelectedCategoryListSuccess,
  updateSelectedCategoryList,
  updateSelectedCategoryListError,
  updateSelectedCategoryListSuccess,
} from './selected-category-list.actions';

export class SelectedCategoryListState {
  entities: Category[] | null;
  isLoading: boolean | null;
  error: string | null;
}

const initialState: SelectedCategoryListState = {
  entities: null,
  isLoading: null,
  error: null,
};

export const selectedCategoryListReducer = createReducer(
  initialState,
  // Load
  on(loadSelectedCategoryList, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(loadSelectedCategoryListSuccess, (state, { entities }) => ({
    ...state,
    entities,
    isLoading: false,
    error: null,
  })),
  on(loadSelectedCategoryListError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  // Update
  on(updateSelectedCategoryList, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(updateSelectedCategoryListSuccess, (state, { entities }) => ({
    ...state,
    entities,
    isLoading: false,
    error: null,
  })),
  on(updateSelectedCategoryListError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
