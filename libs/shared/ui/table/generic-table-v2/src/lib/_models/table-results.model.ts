import { sortByString } from '@my-projects-nx/shared/util/utils';
import { combineLatest, map, Observable, tap } from 'rxjs';
import { FieldSearchParameter } from './filter-definitions.model';
import { PageParameters } from './page-parameters.model';
import { SortDefinition } from './sort-definition.model';
import { TableParametersState } from './table-parameters-state.model';

export class TableResults<T> {
  untouched$: Observable<T[]>;
  filtered$: Observable<T[]>;
  sorted$: Observable<T[]>;
  paged$: Observable<T[]>;
  tableLength: number;

  constructor(
    resultsSource$: Observable<T[]>,
    tableParamsState: TableParametersState<T>
  ) {
    this.defineResultsObservables(resultsSource$, tableParamsState);
  }

  private defineResultsObservables(
    resultsSource$: Observable<T[]>,
    tableParamsState: TableParametersState<T>
  ) {
    this.untouched$ = resultsSource$.pipe(
      map((resultsSource) => [...resultsSource])
    );
    this.defineFilteredResults(tableParamsState.filters$.asObservable());
    this.defineSortedResults(tableParamsState.sort$.asObservable());
    this.definePagedResults(tableParamsState.page$.asObservable());
  }

  private defineFilteredResults(
    filters$: Observable<Map<keyof T, FieldSearchParameter>>
  ) {
    this.filtered$ = combineLatest([this.untouched$, filters$]).pipe(
      map(([results, filtersDefinitions]) => {
        if (filtersDefinitions.size > 0 && results && results.length > 0) {
          return this.filter(results, filtersDefinitions);
        }
        return results;
      }),
      tap((results) => (this.tableLength = results.length))
    );
  }

  private defineSortedResults(sort$: Observable<SortDefinition<T> | null>) {
    this.sorted$ = combineLatest([this.filtered$, sort$]).pipe(
      map(([filteredResults, sortDefiniotion]) => {
        if (sortDefiniotion && filteredResults && filteredResults.length > 0) {
          const sortedResults = [...filteredResults];
          this.sortResults(sortedResults, sortDefiniotion);
          return sortedResults;
        }
        return filteredResults;
      })
    );
  }

  private definePagedResults(page$: Observable<PageParameters>) {
    this.paged$ = combineLatest([this.sorted$, page$]).pipe(
      map(([sortedResults, page]) => {
        const offset = page.index * page.size;
        return sortedResults.filter(
          (_, index) => index >= offset && index < offset + page.size
        );
      })
    );
  }

  private filter = (
    entities: T[],
    filters: Map<keyof T, FieldSearchParameter>
  ): T[] => {
    let filteredEntities: T[];
    filteredEntities = entities.filter((item) => {
      let itemIsValid = false;
      for (let [key, value] of filters) {
        if (
          (item[key] as any)
            .toLowerCase()
            .includes((value as string).toLowerCase().trim())
        ) {
          itemIsValid = true;
          break;
        }
      }
      return itemIsValid;
    });
    return filteredEntities;
  };

  private sortResults(results: T[], sortDefiniotion: SortDefinition<T>) {
    const field = sortDefiniotion.field;
    if (
      typeof results[0][field] === 'string' ||
      results[0][field] instanceof String
    ) {
      results.sort((a, b) =>
        sortByString(
          a[field] as unknown as string,
          b[field] as unknown as string,
          sortDefiniotion.direction
        )
      );
    }
  }
}
