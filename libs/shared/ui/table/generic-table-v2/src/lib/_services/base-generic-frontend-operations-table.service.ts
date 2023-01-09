import { PageEvent } from '@my-projects-nx/shared/ui/table/paginator';
import { mergeMaps } from '@my-projects-nx/shared/util/utils';
import { Observable, Subject, tap } from 'rxjs';
import { IColumn } from '../table/_models/column.model';
import { FieldSearchParameter } from '../_models/filter-definitions.model';
import { PageParameters } from '../_models/page-parameters.model';
import { SortDefinition } from '../_models/sort-definition.model';
import { SortDirection } from '../_models/sort-direction.model';
import { TableParametersState } from '../_models/table-parameters-state.model';
import { TableParameters } from '../_models/table-parameters.model';
import { TableResults } from '../_models/table-results.model';

export abstract class BaseGenericFrontendOperationsTableService<T> {
  private results: TableResults<T>;

  private tableParamsState: TableParametersState<T>;

  protected get tableParametersInitialValues() {
    return new TableParameters<T>();
  }

  protected abstract resultsSource$: Observable<T[]>;

  public abstract columns: IColumn[];

  public dataChanged = new Subject<void>();

  public displayResults$: Observable<T[]>;

  public get tableLength(): number {
    return this.results.tableLength;
  }

  public get pageParameters(): PageParameters | null {
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
    this.initDisplayResults();
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

  public sort(column: IColumn) {
    const sortDefinition = this.tableParamsState.sort$.getValue()!;
    if (
      sortDefinition &&
      sortDefinition.field === column.propertyName &&
      sortDefinition.direction === SortDirection.Desc
    ) {
      this.tableParamsState.sort$.next(null);
    } else {
      this.tableParamsState.sort$.next({
        field: column.propertyName as keyof T,
        direction: sortDefinition
          ? sortDefinition.field === column.propertyName &&
            sortDefinition.direction === SortDirection.Asc
            ? SortDirection.Desc
            : SortDirection.Asc
          : SortDirection.Asc,
      });
    }
  }

  public pageChange(page: PageEvent) {
    const pageParams = {
      index: page.pageIndex,
      size: page.pageSize,
    } as PageParameters;
    this.tableParamsState.page$.next(pageParams);
  }

  private initDisplayResults() {
    let displayResults$;
    if (this.pageParameters) {
      displayResults$ = this.results.paged$;
    } else {
      displayResults$ = this.results.sorted$;
    }
    this.displayResults$ = displayResults$.pipe(
      tap(() => this.dataChanged.next())
    );
  }
}
