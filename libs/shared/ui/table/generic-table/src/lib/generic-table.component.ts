import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BaseGenericTableService } from './_services/base-generic-table-body.service';
import { debounceTime, map, tap } from 'rxjs/operators';
import { PageParameters } from './_models/page-parameters.model';
import { FieldSearchParameter } from './_models/filter-definitions.model';
import { PageEvent } from '@my-projects-nx/shared/ui/table/paginator';
import { table } from 'console';

@Component({
  selector: 'my-projects-nx-app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericTableComponent<T> implements OnInit {
  @Output()
  public rowClick = new EventEmitter<T>();
  public displayResults: T[];

  constructor(
    private cdr: ChangeDetectorRef,
    public tableService: BaseGenericTableService<T>
  ) {
    this.tableService.init();
  }

  searchPhrase = '';
  doSearchWithPhrase = new Subject<string>();

  ngOnInit(): void {
    this.initSubscriptions();
  }

  onPageChange(page: PageEvent) {
    const pageParams = {
      index: page.pageIndex,
      size: page.pageSize,
    } as PageParameters;
    this.tableService.pageChange(pageParams);
  }

  private initSubscriptions() {
    this.doSearchWithPhrase
      .pipe(
        // TODO
        // takeUntil destroyed
        debounceTime(500),
        map((searchPhrase) => searchPhrase.trim().toLowerCase())
      )
      .subscribe((searchPhrase) => {
        const newFilters = new Map<keyof T, FieldSearchParameter>([
          ['question' as keyof T, searchPhrase],
          ['answer' as keyof T, searchPhrase],
        ]);
        this.tableService.filterByFields(newFilters);
      });
    this.tableService.displayResults$
      .pipe(
        // TODO
        // takeUntil destroyed
        tap((displayResults) => (this.displayResults = displayResults)),
        tap(() => this.cdr.markForCheck())
      )
      .subscribe();
  }
}
