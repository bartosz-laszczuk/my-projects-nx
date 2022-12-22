import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PageEvent } from './_models/page-event.model';

@Component({
  selector: 'my-projects-nx-shared-ui-table-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent implements OnChanges {
  @Input() showFirstLastButtons = true;
  @Input() length: number;
  @Input() pageIndex: number;
  @Input() pageSize: number;
  @Input() pageSizeOptions: number;
  @Input() disabled: boolean;
  @Output() page = new EventEmitter<PageEvent>();
  numberOfPages: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.length && this.pageSize) {
      this.numberOfPages = Math.ceil(this.length / this.pageSize);
    }
    if (this.length === 0) {
      this.numberOfPages = 1;
    }
  }

  onPage(newPageIndex: number) {
    this.page.emit({
      length: this.length,
      pageIndex: newPageIndex,
      pageSize: this.pageSize,
    } as PageEvent);
  }
}
