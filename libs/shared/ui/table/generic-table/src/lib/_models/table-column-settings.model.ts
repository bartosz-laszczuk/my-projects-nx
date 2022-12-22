import { DictionaryItem } from '@my-projects-nx/question-randomizer/shared/util/models/frontend';
import { CellType } from '../_enums/cell-type.enum';
import { SortDirection } from './sort-direction.model';

export class TableColumnSettings<T> {
  public key: string;
  public title: string;
  public dataPropName: keyof T;
  public cellType: CellType;
  public displayTexts: Map<number, string> | DictionaryItem[];
  public width: string;

  public sortable: boolean = false;
  public sortingType: SortDirection;
  public filterable: boolean = false;
  public filterOptions: string[];
  public filterText: string;

  constructor(init?: Partial<TableColumnSettings<T>>) {
    Object.assign(this, init);
  }
}
