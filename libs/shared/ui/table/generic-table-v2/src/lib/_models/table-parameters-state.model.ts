import { BehaviorSubject } from 'rxjs';
import { FieldSearchParameter } from './filter-definitions.model';
import { PageParameters } from './page-parameters.model';
import { SortDefinition } from './sort-definition.model';
import { TableParameters } from './table-parameters.model';

export class TableParametersState<T> {
  page$: BehaviorSubject<PageParameters | null>;
  sort$: BehaviorSubject<SortDefinition<T> | null>;
  filters$: BehaviorSubject<Map<keyof T, FieldSearchParameter>>;

  constructor(parameters: TableParameters<T>) {
    this.page$ = new BehaviorSubject<PageParameters | null>(parameters.page);
    this.sort$ = new BehaviorSubject<SortDefinition<T> | null>(parameters.sort);
    this.filters$ = new BehaviorSubject<Map<keyof T, FieldSearchParameter>>(
      parameters.filters ?? new Map<keyof T, FieldSearchParameter>()
    );
  }
}
