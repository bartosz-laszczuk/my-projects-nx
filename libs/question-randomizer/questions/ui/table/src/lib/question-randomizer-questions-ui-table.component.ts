import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, map, Subject } from 'rxjs';
import { PageEvent } from '@my-projects-nx/shared/ui/table/paginator';
import { Question } from '@my-projects-nx/question-randomizer/shared/util/models/frontend';
import {
  BaseGenericFrontendOperationsTableService,
  FieldSearchParameter,
  IColumn,
} from '@my-projects-nx/shared/ui/table/generic-table-v2';
import { QuestionsFrontendOperationsTableService } from './_services/questions-table-settings.service';

@Component({
  selector: 'my-projects-nx-question-randomizer-questions-ui-table',
  templateUrl: './question-randomizer-questions-ui-table.component.html',
  styleUrls: ['./question-randomizer-questions-ui-table.component.scss'],
  providers: [
    {
      provide: BaseGenericFrontendOperationsTableService,
      useClass: QuestionsFrontendOperationsTableService,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerQuestionsUiTableComponent implements OnInit {
  @Output() rowClick = new EventEmitter<Question>();
  constructor(
    private cdr: ChangeDetectorRef,
    public tableService: BaseGenericFrontendOperationsTableService<Question>
  ) {
    this.tableService.init();
  }

  searchPhrase = '';
  doSearchWithPhrase = new Subject<string>();

  ngOnInit(): void {
    this.initSubscriptions();
  }

  onSort(column: IColumn) {
    this.tableService.sort(column);
  }

  onPageChange(page: PageEvent) {
    this.tableService.pageChange(page);
  }

  onRowClick(question: Question) {
    this.rowClick.emit(question);
  }

  private initSubscriptions() {
    this.tableService.init();
    this.doSearchWithPhrase
      .pipe(
        // TODO
        // takeUntil destroyed
        debounceTime(500),
        map((searchPhrase) => searchPhrase.trim().toLowerCase())
      )
      .subscribe((searchPhrase) => {
        const newFilters = new Map<keyof Question, FieldSearchParameter>([
          ['question' as keyof Question, searchPhrase],
          ['answer' as keyof Question, searchPhrase],
        ]);
        this.tableService.filterByFields(newFilters);
      });
    // this.tableService.displayResults$
    //   .pipe(
    //     // TODO
    //     // takeUntil destroyed
    //     tap((displayResults) => (this.displayResults = displayResults)),
    //     tap(() => this.cdr.markForCheck())
    //   )
    //   .subscribe();
  }
}
