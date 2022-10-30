import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRandomizerShellUiHeaderComponent } from './question-randomizer-shell-ui-header.component';

describe('QuestionRandomizerShellUiHeaderComponent', () => {
  let component: QuestionRandomizerShellUiHeaderComponent;
  let fixture: ComponentFixture<QuestionRandomizerShellUiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionRandomizerShellUiHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionRandomizerShellUiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
