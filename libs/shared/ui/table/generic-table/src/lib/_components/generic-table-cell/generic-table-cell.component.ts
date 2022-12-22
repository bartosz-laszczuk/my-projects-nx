import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CellType } from '../../_enums/cell-type.enum';
import { TableColumnSettings } from '../../_models/table-column-settings.model';

@Component({
  selector: '[app-generic-table-cell]',
  templateUrl: './generic-table-cell.component.html',
  styleUrls: ['./generic-table-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericTableCellComponent<T> {
  @Input()
  public column: TableColumnSettings<T>;

  @Input()
  public data: any;

  @Input()
  public rowIndex: number;

  CellType = CellType;
}
