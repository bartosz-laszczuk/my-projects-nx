import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SortDefinition } from '../../../_models/sort-definition.model';
import { IColumn } from '../../_models/column.model';

@Component({
  selector:
    'app-generic-table-sortable-header,[app-generic-table-sortable-header]',
  templateUrl: './generic-table-sortable-header.component.html',
  styleUrls: ['./generic-table-sortable-header.component.scss'],
})
export class GenericTableHeaderComponent<T> {
  @Input() public column: IColumn;
  @Input() public sortDefinition: SortDefinition<T> | null;
  @Output() public sort = new EventEmitter<IColumn>();

  public sortByColumn(column: IColumn) {
    this.sort.emit(column);
  }
}
