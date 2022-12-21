import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRandomizerQuestionsUiQuestionItemComponent } from './question-randomizer-questions-ui-question-item.component';

describe('QuestionRandomizerQuestionsUiQuestionItemComponent', () => {
  let component: QuestionRandomizerQuestionsUiQuestionItemComponent;
  let fixture: ComponentFixture<QuestionRandomizerQuestionsUiQuestionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionRandomizerQuestionsUiQuestionItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      QuestionRandomizerQuestionsUiQuestionItemComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
