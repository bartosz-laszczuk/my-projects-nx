import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionsFacade } from '@my-projects-nx/question-randomizer/questions/data-access/store';
import { QuestionRandomizerQuestionsUiEditQuestionComponent } from '@my-projects-nx/question-randomizer/questions/ui/edit-question';
import {
  Question,
  QuestionCsvListItem,
} from '@my-projects-nx/question-randomizer/shared/util/models/frontend';
import { BaseGenericTableService } from 'libs/shared/ui/table/generic-table/src/lib/_services/base-generic-table-body.service';
import { delay } from 'rxjs';
import { QuestionsTableSettingsService } from './_services/questions-table-settings.service';

@Component({
  selector: 'my-projects-nx-question-randomizer-questions-feature-shell',
  templateUrl: './question-randomizer-questions-feature-shell.component.html',
  styleUrls: ['./question-randomizer-questions-feature-shell.component.scss'],
  providers: [
    {
      provide: BaseGenericTableService,
      useClass: QuestionsTableSettingsService,
    },
    QuestionsTableSettingsService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerQuestionsFeatureShellComponent
  implements OnInit
{
  unitTestPracticeString: string;
  constructor(
    private _dialog: MatDialog,
    public questionsFacade: QuestionsFacade
  ) {}

  ngOnInit() {
    this.questionsFacade.loadQuestionList();
    this.questionsFacade
      .getUnitTestPracticeString()
      .pipe(delay(500))
      .subscribe(
        (unitTestPracticeString) =>
          (this.unitTestPracticeString = unitTestPracticeString)
      );
  }

  onAdd(): void {
    this._dialog.open(QuestionRandomizerQuestionsUiEditQuestionComponent, {
      width: '650px',
      height: '420px',
      data: {},
    });
  }

  onRowClick(question: Question): void {
    console.log(question);
    this._dialog.open(QuestionRandomizerQuestionsUiEditQuestionComponent, {
      width: '650px',
      height: '420px',
      data: { question },
    });
  }

  onDelete(id: string) {
    this.questionsFacade.deleteQuestion(id);
  }

  onImport() {
    document.getElementById('txtFileUpload')!.click();
  }

  onExport() {
    this.questionsFacade.exportQuestionList();
  }

  onFileSelected($event: any): void {
    // TO DO
    // move to service
    const files = $event.srcElement.files;

    if (files[0].name.endsWith('.csv')) {
      const input = $event.target;
      const reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        const csvData = reader.result as string;
        const csvRecordsArray = csvData.split(/\r\n|\n/);
        const entities = this.getDataRecordsArrayFromCsvFile(csvRecordsArray);
        this.questionsFacade.importQuestionList(entities);
      };

      reader.onerror = function () {
        alert('error is occured while reading file!');
      };
    } else {
      alert('Please import valid .csv file.');
    }
  }

  private getDataRecordsArrayFromCsvFile(csvRecordsArray: any) {
    // TO DO
    // move to service
    const csvArr = [];
    for (let i = 2; i < csvRecordsArray.length; i++) {
      const curruntRecord = csvRecordsArray[i].split(';') as any[];
      csvArr.push({
        question: curruntRecord[0].trim(),
        answer: curruntRecord[1].trim(),
        answerPl: curruntRecord[2].trim(),
        categoryName: curruntRecord[3].trim(),
        qualificationName: curruntRecord[4]?.trim(),
        isActive: curruntRecord[5] === 'true' ? true : false,
      } as QuestionCsvListItem);
    }
    return csvArr;
  }
}
