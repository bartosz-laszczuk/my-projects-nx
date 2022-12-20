import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuestionsFacade } from '@my-projects-nx/question-randomizer/questions/data-access/store';
import { RandomizationService } from '@my-projects-nx/question-randomizer/randomization/data-access/repositories';
import {
  RandomizationFacade,
  SelectedCategoryListFacade,
  UsedQuestionListFacade,
} from '@my-projects-nx/question-randomizer/randomization/data-access/store';
import { RandomizationStatus } from '@my-projects-nx/question-randomizer/randomization/util/enums';
import { Randomization } from '@my-projects-nx/question-randomizer/randomization/util/models/frontend';
import { DictionariesFacade } from '@my-projects-nx/question-randomizer/shared/data-access/store/dictionaries';
import {
  ControlItem,
  Value,
} from '@my-projects-nx/question-randomizer/shared/util/models/frontend';
import { map, Observable, take, tap } from 'rxjs';

@Component({
  selector: 'my-projects-nx-question-randomizer-randomization-feature-shell',
  templateUrl:
    './question-randomizer-randomization-feature-shell.component.html',
  styleUrls: [
    './question-randomizer-randomization-feature-shell.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerRandomizationFeatureShellComponent {
  numberOfProgressBars = 44;
  iterableArray = Array(this.numberOfProgressBars);
  randomization: Randomization;
  progress: number;
  categoryControlItems$: Observable<ControlItem[]> =
    this._dictionariesFacade.categoryControlItems$;
  selectedCategoryIdListLoaded$: Observable<string[]> =
    this._selectedCategoryListFacade.selectedCategoryIdListLoaded$;
  randomizationProgress$: Observable<number> =
    this._randomizationService.randomizationProgress$;
  isPreviousDisabled$: Observable<boolean> =
    this._randomizationService.usedQuestionsWithCategory$.pipe(
      tap((questions) => console.log('usedQuestionsWithCategory', questions)),
      map((questions) => questions.length === 0),
      tap((result) => console.log(result))
    );
  isRandomizeDisabled$: Observable<boolean> =
    this._randomizationService.unusedQuestionsWithCategory$.pipe(
      tap((questions) => console.log('unusedQuestionsWithCategory', questions)),
      map((questions) => questions.length === 0),
      tap((result) => console.log(result))
    );
  constructor(
    private _randomizationFacade: RandomizationFacade,
    private _questionsFacade: QuestionsFacade,
    private _dictionariesFacade: DictionariesFacade,
    private _selectedCategoryListFacade: SelectedCategoryListFacade,
    private _randomizationService: RandomizationService,
    private _usedQuestionListFacade: UsedQuestionListFacade
  ) {}
  ngOnInit(): void {
    this._randomizationFacade.loadRandomization();
    this.initSubscriptions();
  }
  onCategoryFilterChanged(value: Value[]) {
    this._selectedCategoryListFacade.updateSelectedCategoryList(
      value as string[]
    );
  }
  onRandomize() {
    if (this.randomization?.currentQuestion) {
      this._usedQuestionListFacade.addQuestionToUsedQuestions(
        this.randomization?.currentQuestion.id
      );
    }
  }
  onPrevious() {
    this._randomizationService.previousQuestion$
      .pipe(take(1))
      .subscribe((previousQuestion) =>
        this._randomizationFacade.updateQuestionAsCurrent(previousQuestion)
      );
  }
  onShowAnswer() {
    this.randomization.isAnswerHidden = !this.randomization.isAnswerHidden;
    this._randomizationFacade.updateRandomization(this.randomization);
  }
  onReset() {
    this._randomizationFacade.reset(this.randomization.id);
  }
  isBarFilled(index: number, progress: number): boolean {
    const progressPercentage = progress / 100;
    const indexPercentage = index / this.numberOfProgressBars;
    return indexPercentage < progressPercentage;
  }
  private initSubscriptions() {
    this._questionsFacade.questionList$.subscribe((questionList) => {
      if (!questionList) {
        this._questionsFacade.loadQuestionList();
      }
    });
    this._randomizationFacade.randomizationLoaded$.subscribe(
      (randomization) => {
        this.randomization = { ...randomization };
        if (
          !randomization.currentQuestion &&
          randomization.status !== RandomizationStatus.Finished
        ) {
          this._randomizationFacade.randomizeQuestion();
        }
      }
    );
    this.randomizationProgress$.subscribe(
      (progress) => (this.progress = progress)
    );
  }
}
