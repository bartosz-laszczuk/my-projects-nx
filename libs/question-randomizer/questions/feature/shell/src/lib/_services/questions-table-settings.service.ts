import { Injectable } from '@angular/core';
import { QuestionsFacade } from '@my-projects-nx/question-randomizer/questions/data-access/store';
import { DictionariesFacade } from '@my-projects-nx/question-randomizer/shared/data-access/store/dictionaries';
import { Question } from '@my-projects-nx/question-randomizer/shared/util/models/frontend';
import {
  BaseGenericTableService,
  CellType,
  SortDirection,
  TableColumnSettings,
  TableDisplayMode,
  TableParameters,
} from '@my-projects-nx/shared/ui/table/generic-table';
import { map, Observable } from 'rxjs';

enum QuestionsTableColumnKey {
  Question = 'question',
  Answer = 'answer',
  Category = 'category',
  IsActive = 'isActive',
}
@Injectable()
export class QuestionsTableSettingsService extends BaseGenericTableService<Question> {
  public override displayMode = TableDisplayMode.Paged;

  constructor(
    private questionsFacade: QuestionsFacade,
    private dictionariesFacade: DictionariesFacade
  ) {
    super();
  }

  protected override resultsSource$: Observable<Question[]> =
    this.questionsFacade.questionListLoaded$;

  protected override get tableParametersInitialValues(): TableParameters<Question> {
    return new TableParameters<Question>({
      page: { index: 0, size: 18 },
      sort: { field: 'question', direction: SortDirection.Asc },
    });
  }

  public override tableColumnSettings$: Observable<
    TableColumnSettings<Question>[]
  > = this.dictionariesFacade.categoriesLoaded$.pipe(
    map((categories) => [
      new TableColumnSettings({
        key: QuestionsTableColumnKey.Question,
        title: 'Question',
        dataPropName: 'question',
        cellType: CellType.Text,
        width: '40%',
        sortable: true,
      }),
      new TableColumnSettings({
        key: QuestionsTableColumnKey.Answer,
        title: 'Answer',
        dataPropName: 'answer',
        cellType: CellType.Text,
        width: '40%',
        sortable: true,
      }),
      new TableColumnSettings({
        key: QuestionsTableColumnKey.Category,
        title: 'Category',
        dataPropName: 'categoryId',
        cellType: CellType.Enum,
        displayTexts: categories,
        width: '20%',
        sortable: false,
      }),
      // new TableColumnSettings({
      //   key: QuestionsTableColumnKey.IsActive,
      //   title: 'Active',
      //   dataPropName: 'isActive',
      //   cellType: CellType.Text,
      // }),
    ])
  );
}
