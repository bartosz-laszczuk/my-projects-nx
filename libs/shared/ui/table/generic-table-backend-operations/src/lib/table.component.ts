import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnDirective } from './models/column.directive';
import { IColumn } from './models/column.model';
import { IFilterSelected } from './models/filter-selected.model';
import { TableService } from './table.service';

@Component({
  selector: 'my-projects-nx-generic-table-backend-operations',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements AfterViewInit {
  @Input() set data(value: T[] | MatTableDataSource<T>) {
    console.log(value);
    this.dataSource = value;
  }
  @Input() columns: IColumn[] = [];
  @Input() title = '';
  @Input() filterSelected: IFilterSelected[] = [];
  @Input() sortColumn = 'id';
  @Input() sortAscending = false;
  @Input() lastColumnAlignLeft = false;
  @Input() trackBy = (index: number, item: T) => item;

  @Output() sortByEv: EventEmitter<{ column: string; ascending: boolean }> =
    new EventEmitter<{
      column: string;
      ascending: boolean;
    }>();
  @Output() menuCloseEv: EventEmitter<string> = new EventEmitter<string>();

  @ContentChildren(ColumnDirective) columnTemps: QueryList<ColumnDirective> =
    new QueryList<ColumnDirective>();

  dataSource: T[] | MatTableDataSource<T> = [];
  columnTemplates: Record<string, ColumnDirective> = {};
  filterTemplates: Record<string, ColumnDirective> = {};

  get displayedColumns(): string[] {
    return [...this.columns.map((item: IColumn) => item.propertyName)];
  }
  constructor(
    private tableService: TableService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    const { columns, filters } = this.tableService.getTemplates(
      this.columnTemps
    );
    this.columnTemplates = columns;
    this.filterTemplates = filters;
    this.cdr.detectChanges();
  }

  menuClose(): void {
    this.menuCloseEv.emit();
  }

  sortBy(column: string, ascending: boolean): void {
    this.sortColumn = column;
    this.sortAscending = ascending;
    this.sortByEv.emit({ column, ascending });
  }

  getFilterActive(column: string): boolean {
    const element = this.filterSelected.filter(
      (item: IFilterSelected) => item.column === column
    );
    if (element?.length) {
      return element[0].filterSelected;
    }
    return false;
  }
}
