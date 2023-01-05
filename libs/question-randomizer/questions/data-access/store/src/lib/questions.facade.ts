import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable, of } from 'rxjs';
import {
  createQuestion,
  deleteQuestion,
  exportQuestionList,
  importQuestionList,
  loadQuestionList,
  updateQuestion,
} from './list/list.actions';
import { getQuestionList } from './list/list.selectors';
import { QuestionsState } from './questions.reducer';
import {
  Question,
  QuestionCsvListItem,
} from '@my-projects-nx/question-randomizer/shared/util/models/frontend';
import { QuestionMapperService } from '@my-projects-nx/question-randomizer/questions/data-access/mappers';

@Injectable({
  providedIn: 'root',
})
export class QuestionsFacade {
  questionList$ = this._store.pipe(select(getQuestionList));
  questionListLoaded$ = this.questionList$.pipe(
    filter((questionList) => !!questionList),
    map((questionList) => questionList as Question[])
  );

  constructor(
    private _store: Store<QuestionsState>,
    private _mapper: QuestionMapperService
  ) {}

  loadQuestionList() {
    this._store.dispatch(loadQuestionList());
  }

  exportQuestionList() {
    this._store.dispatch(exportQuestionList());
  }

  createQuestion(entity: Question) {
    this._store.dispatch(
      createQuestion({
        entity: this._mapper.questionToQuestionCreateRequest(entity),
      })
    );
  }

  updateQuestion(entity: Question) {
    this._store.dispatch(updateQuestion({ entity }));
  }

  deleteQuestion(id: string) {
    this._store.dispatch(deleteQuestion({ id }));
  }

  importQuestionList(entities: QuestionCsvListItem[]) {
    this._store.dispatch(importQuestionList({ entities }));
  }

  getUnitTestPracticeString(): Observable<string> {
    return of('practice string');
  }
}
