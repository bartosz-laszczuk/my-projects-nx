import { Injectable } from '@angular/core';
import { UserFacade } from '@my-projects-nx/question-randomizer/auth/data-access/store';
import { Randomization } from '@my-projects-nx/question-randomizer/randomization/util/models/frontend';
import { Question } from '@my-projects-nx/question-randomizer/shared/util/models/frontend';
import { select, Store } from '@ngrx/store';
import { filter, map } from 'rxjs';
import {
  loadRandomization,
  randomizeQuestion,
  resetRandomization,
  updateQuestionAsCurrent,
  updateRandomization,
} from './randomization.actions';
import { RandomizationState } from './randomization.reducer';
import { getRandomization } from './randomization.selectors';

@Injectable({
  providedIn: 'root',
})
export class RandomizationFacade {
  randomizationLoaded$ = this._store.pipe(
    select(getRandomization),
    filter((randomization) => !!randomization),
    map((randomization) => randomization as Randomization)
  );
  constructor(
    private _store: Store<RandomizationState>,
    private _userFacade: UserFacade
  ) {}

  loadRandomization() {
    this._userFacade.userId$.subscribe((uid) =>
      this._store.dispatch(loadRandomization({ uid }))
    );
  }

  randomizeQuestion() {
    this._store.dispatch(randomizeQuestion());
  }

  updateQuestionAsCurrent(question: Question) {
    this._store.dispatch(updateQuestionAsCurrent({ question }));
  }

  updateRandomization(randomization: Randomization) {
    this._store.dispatch(updateRandomization({ entity: randomization }));
  }

  reset(randomizationId: string) {
    this._store.dispatch(resetRandomization({ randomizationId }));
  }
}
