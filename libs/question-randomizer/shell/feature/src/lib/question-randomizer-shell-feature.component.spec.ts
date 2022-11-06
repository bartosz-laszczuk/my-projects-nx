import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRandomizerShellUiLayoutComponent } from './question-randomizer-shell-feature.component';

describe('QuestionRandomizerShellUiLayoutComponent', () => {
  let component: QuestionRandomizerShellUiLayoutComponent;
  let fixture: ComponentFixture<QuestionRandomizerShellUiLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionRandomizerShellUiLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionRandomizerShellUiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
