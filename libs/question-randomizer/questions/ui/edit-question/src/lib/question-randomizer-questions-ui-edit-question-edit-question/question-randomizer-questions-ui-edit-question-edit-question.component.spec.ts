import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRandomizerQuestionsUiEditQuestionComponent } from './question-randomizer-questions-ui-edit-question-edit-question.component';

describe('QuestionRandomizerQuestionsUiEditQuestionComponent', () => {
  let component: QuestionRandomizerQuestionsUiEditQuestionComponent;
  let fixture: ComponentFixture<QuestionRandomizerQuestionsUiEditQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionRandomizerQuestionsUiEditQuestionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      QuestionRandomizerQuestionsUiEditQuestionComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
