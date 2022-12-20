import { Dictionaries } from '@my-projects-nx/question-randomizer/shared/util/models/frontend';
import { createReducer, on } from '@ngrx/store';
import {
  loadDictionaries,
  loadDictionariesError,
  loadDictionariesSuccess,
} from './dictionaries.actions';

export interface DictionariesState {
  entities: Dictionaries;
  isLoading: boolean;
  error: string | null;
}

export const initialState: DictionariesState = {
  entities: {} as Dictionaries,
  isLoading: false,
  error: null,
};

export const dictionariesReducer = createReducer(
  initialState,
  on(loadDictionaries, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(loadDictionariesSuccess, (state, { entities }) => ({
    ...state,
    entities: entities,
    isLoading: false,
    error: null,
  })),
  on(loadDictionariesError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  }))
);
