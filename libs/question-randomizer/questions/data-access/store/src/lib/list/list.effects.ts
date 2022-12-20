import { Injectable } from '@angular/core';
import { QuestionMapperService } from '@my-projects-nx/question-randomizer/questions/data-access/mappers';
import { QuestionListService } from '@my-projects-nx/question-randomizer/questions/data-access/repositories';
import { DictionariesFacade } from '@my-projects-nx/question-randomizer/shared/data-access/store/dictionaries';
import {
  Question as QuestionBe,
  QuestionCreateRequest,
} from '@my-projects-nx/question-randomizer/shared/util/models/backend';
import { QuestionCsvListItem } from '@my-projects-nx/question-randomizer/shared/util/models/frontend';
import { NotificationService } from '@my-projects-nx/question-randomizer/shared/util/notification';
import { exportToCsv } from '@my-projects-nx/shared/util/utils';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { serverTimestamp } from 'firebase/firestore';
import * as moment from 'moment';
import { catchError, combineLatest, map, of, switchMap, take, tap } from 'rxjs';
import { QuestionsFacade } from '../questions.facade';
import {
  createQuestion,
  createQuestionError,
  createQuestionSuccess,
  deleteQuestion,
  deleteQuestionError,
  deleteQuestionSuccess,
  exportQuestionList,
  importQuestionList,
  importQuestionListError,
  importQuestionListSuccess,
  loadQuestionList,
  loadQuestionListError,
  loadQuestionListSuccess,
  updateQuestion,
  updateQuestionError,
  updateQuestionSuccess,
} from './list.actions';

@Injectable()
export class ListEffects {
  constructor(
    private actions$: Actions,
    private questionListService: QuestionListService,
    private dictionariesFacade: DictionariesFacade,
    private questionsFacade: QuestionsFacade,
    private mapper: QuestionMapperService,
    private notificationService: NotificationService
  ) {}

  loadQuestionList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuestionList),
      switchMap(() =>
        this.questionListService.loadQuestionList().pipe(
          map((questionList: QuestionBe[]) =>
            loadQuestionListSuccess({ entities: questionList })
          ),
          catchError((err) => of(loadQuestionListError({ error: err.message })))
        )
      )
    )
  );

  importQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(importQuestionList),
      map((action) => action.entities),
      switchMap((entities) =>
        combineLatest([
          this.dictionariesFacade.categoriesLoaded$,
          this.dictionariesFacade.qualificationsLoaded$,
        ]).pipe(
          take(1),
          map(([categories, qualifications]) =>
            entities.map((entity) =>
              this.mapper.questionCsvToQuestionCreateRequest(
                entity,
                categories,
                qualifications
              )
            )
          )
        )
      ),
      switchMap((entities: QuestionCreateRequest[]) => {
        return this.questionListService.createQuestions(entities).pipe(
          map(() => importQuestionListSuccess()),
          catchError((err) =>
            of(importQuestionListError({ error: err.message }))
          )
        );
      })
    )
  );

  importQuestionListSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(importQuestionListSuccess),
      map(() => loadQuestionList())
    )
  );

  exportQuestionList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(exportQuestionList),
        switchMap(() =>
          combineLatest([
            this.dictionariesFacade.qualificationsLoaded$,
            this.dictionariesFacade.categoriesLoaded$,
            this.questionsFacade.questionListLoaded$,
          ]).pipe(take(1))
        ),
        tap(([qualifications, categories, questionList]) => {
          const questionExportList = [] as QuestionCsvListItem[];

          questionList.forEach((question) =>
            questionExportList.push({
              question: question.question,
              answer: question.answer,
              answerPl: question.answerPl,
              categoryName: categories.find(
                (category) => category.id === question.categoryId
              )?.name,
              qualificationName: qualifications.find(
                (qualification) => qualification.id === question.qualificationId
              )?.name,
              isActive: question.isActive ?? true,
            } as QuestionCsvListItem)
          );

          const fileName = `${moment(new Date()).format('YYYYMMDD')}_questions`;
          const headers = [
            'Question',
            'Answer',
            'AnswerPl',
            'Type',
            'Qualification',
            'IsActive',
          ];
          exportToCsv(fileName, questionExportList, headers);
        })
      ),
    { dispatch: false }
  );

  createQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createQuestion),
      map((action) => action.entity),
      map((entity: QuestionCreateRequest) => ({
        ...entity,
        created: serverTimestamp(),
      })),
      switchMap((entity: QuestionCreateRequest) =>
        this.questionListService.createQuestion(entity).pipe(
          switchMap((id) => this.questionListService.loadQuestion(id)),
          map((question) => createQuestionSuccess({ entity: question })),
          catchError((err) => of(createQuestionError({ error: err.message })))
        )
      )
    )
  );

  updateQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateQuestion),
      map((action) => action.entity),
      map((entity: QuestionBe) => ({
        ...entity,
        updated: serverTimestamp(),
      })),
      switchMap((entity) =>
        this.questionListService.updateQuestion(entity).pipe(
          map(() => updateQuestionSuccess({ id: entity.id, changes: entity })),
          catchError((err) => of(updateQuestionError({ error: err.message })))
        )
      )
    )
  );

  deleteQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteQuestion),
      map((action) => action.id),
      switchMap((id) =>
        this.questionListService.deleteQuestion(id).pipe(
          tap(() => this.notificationService.success('Deleted successfully!')),
          map(() => deleteQuestionSuccess({ id })),
          catchError((err) => of(deleteQuestionError({ error: err.message })))
        )
      )
    )
  );
}
