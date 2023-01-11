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
import { IFilterSelected } from './_models/filter-selected.model';
import { TableService } from './table.service';
import { IColumn } from './_models/column.model';
import { ColumnDirective } from './_models/column.directive';
import { SortDefinition } from '../_models/sort-definition.model';

@Component({
  selector: 'my-projects-nx-generic-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements AfterViewInit {
  @Input() set data(value: T[] | MatTableDataSource<T>) {
    this.dataSource = value;
  }
  @Input() columns: IColumn[] = [];
  @Input() title = '';
  @Input() filterSelected: IFilterSelected[] = [];
  @Input() sortDefinition: SortDefinition<T> | null;
  @Input() lastColumnAlignLeft = false;
  @Input() trackBy = (index: number, item: T) => item;

  @Output() sort = new EventEmitter<IColumn>();
  @Output() menuCloseEv: EventEmitter<string> = new EventEmitter<string>();
  @Output() rowClick = new EventEmitter<T>();

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

  onSort(column: IColumn): void {
    this.sort.emit(column);
  }

  onRowClick(row: T) {
    this.rowClick.emit(row);
  }
}
