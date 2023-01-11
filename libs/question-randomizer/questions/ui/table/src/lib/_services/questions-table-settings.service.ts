import { Injectable } from '@angular/core';
import { QuestionsFacade } from '@my-projects-nx/question-randomizer/questions/data-access/store';
import { Question } from '@my-projects-nx/question-randomizer/shared/util/models/frontend';
import {
  SortDirection,
  TableParameters,
} from '@my-projects-nx/shared/ui/table/generic-table';
import {
  BaseGenericFrontendOperationsTableService,
  IColumn,
} from '@my-projects-nx/shared/ui/table/generic-table-v2';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionsFrontendOperationsTableService extends BaseGenericFrontendOperationsTableService<Question> {
  constructor(private questionsFacade: QuestionsFacade) {
    super();
  }

  protected override resultsSource$: Observable<Question[]> =
    this.questionsFacade.questionListLoaded$;

  protected override get tableParametersInitialValues(): TableParameters<Question> {
    return new TableParameters<Question>({
      page: { index: 0, size: 19 },
      sort: { field: 'question', direction: SortDirection.Asc },
    });
  }

  public override columns: IColumn[] = [
    {
      displayName: 'Question',
      propertyName: 'question',
      sortable: true,
      width: '40%',
    },
    {
      displayName: 'Answer',
      propertyName: 'answer',
      sortable: true,
      width: '40%',
    },
    {
      displayName: 'Category',
      propertyName: 'categoryName',
      width: '20%',
    },
  ];
}
