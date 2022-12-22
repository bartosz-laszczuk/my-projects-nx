import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SortDefinition } from '../../_models/sort-definition.model';
import { TableColumnSettings } from '../../_models/table-column-settings.model';

@Component({
  selector: '[app-generic-table-header]',
  templateUrl: './generic-table-header.component.html',
  styleUrls: ['./generic-table-header.component.scss'],
})
export class GenericTableHeaderComponent<T> {
  @Input() public column: TableColumnSettings<T>;
  @Input() public sortDefinition: SortDefinition<T> | null;
  @Output() public sort = new EventEmitter<TableColumnSettings<T>>();
  @HostBinding('class.app-table__header')
  public active: boolean = true;

  public sortByColumn(column: TableColumnSettings<T>) {
    this.sort.emit(column);
  }
}
