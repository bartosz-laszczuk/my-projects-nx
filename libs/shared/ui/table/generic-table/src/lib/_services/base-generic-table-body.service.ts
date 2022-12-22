import { mergeMaps } from '@my-projects-nx/shared/util/utils';
import { Observable, Subject, tap } from 'rxjs';
import { TableDisplayMode } from '../_enums/table-display-mode.enum';
import { FieldSearchParameter } from '../_models/filter-definitions.model';
import { PageParameters } from '../_models/page-parameters.model';
import { SortDefinition } from '../_models/sort-definition.model';
import { SortDirection } from '../_models/sort-direction.model';
import { TableColumnSettings } from '../_models/table-column-settings.model';
import { TableParametersState } from '../_models/table-parameters-state.model';
import { TableParameters } from '../_models/table-parameters.model';
import { TableResults } from '../_models/table-results.model';

export abstract class BaseGenericTableService<T> {
  private results: TableResults<T>;

  private tableParamsState: TableParametersState<T>;

  protected displayMode = TableDisplayMode.Full;

  protected get tableParametersInitialValues() {
    return new TableParameters<T>();
  }

  protected abstract resultsSource$: Observable<T[]>;

  public abstract tableColumnSettings$: Observable<TableColumnSettings<T>[]>;

  public dataChanged = new Subject<void>();

  public get displayResults$(): Observable<T[]> {
    let displayResults$;
    if (this.displayMode === TableDisplayMode.Paged) {
      displayResults$ = this.results.paged$;
    } else {
      displayResults$ = this.results.sorted$;
    }
    return displayResults$.pipe(tap(() => this.dataChanged.next()));
  }

  public get tableLength(): number {
    return this.results.tableLength;
  }

  public get pageParameters(): PageParameters {
    return this.tableParamsState.page$.getValue();
  }

  public get sortDefinition(): SortDefinition<T> | null {
    return this.tableParamsState.sort$.getValue();
  }

  public init(): void {
    this.tableParamsState = new TableParametersState<T>(
      this.tableParametersInitialValues
    );
    this.results = new TableResults<T>(
      this.resultsSource$,
      this.tableParamsState
    );
  }

  public filterByField(field: keyof T, value: FieldSearchParameter) {
    const newFilters = this.tableParamsState.filters$
      .getValue()
      .set(field, value);
    this.tableParamsState.filters$.next(newFilters);
    this.tableParamsState.page$.next({
      ...this.tableParamsState.page$.getValue(),
      index: 0,
    } as PageParameters);
  }

  public filterByFields(newFilters: Map<keyof T, FieldSearchParameter>) {
    const allFilters = mergeMaps(
      this.tableParamsState.filters$.getValue(),
      newFilters
    );
    this.tableParamsState.filters$.next(allFilters);
    this.tableParamsState.page$.next({
      ...this.tableParamsState.page$.getValue(),
      index: 0,
    } as PageParameters);
  }

  public sortByColumn(column: TableColumnSettings<T>) {
    const sortDefinition = this.tableParamsState.sort$.getValue()!;
    if (
      sortDefinition &&
      sortDefinition.field === column.dataPropName &&
      sortDefinition.direction === SortDirection.Desc
    ) {
      this.tableParamsState.sort$.next(null);
    } else {
      this.tableParamsState.sort$.next({
        field: column.dataPropName as keyof T,
        direction: sortDefinition
          ? sortDefinition.field === column.dataPropName &&
            sortDefinition.direction === SortDirection.Asc
            ? SortDirection.Desc
            : SortDirection.Asc
          : SortDirection.Asc,
      });
    }
  }

  public pageChange(pageParams: PageParameters) {
    this.tableParamsState.page$.next(pageParams);
  }
}
