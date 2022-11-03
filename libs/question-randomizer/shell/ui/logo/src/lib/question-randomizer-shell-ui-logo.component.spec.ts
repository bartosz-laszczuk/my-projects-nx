import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRandomizerShellUiLogoComponent } from './question-randomizer-shell-ui-logo.component';

describe('QuestionRandomizerShellUiLogoComponent', () => {
  let component: QuestionRandomizerShellUiLogoComponent;
  let fixture: ComponentFixture<QuestionRandomizerShellUiLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionRandomizerShellUiLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionRandomizerShellUiLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
