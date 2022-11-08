import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRandomizerAuthFeatureEmailConfirmComponent } from './question-randomizer-auth-feature-email-confirm.component';

describe('QuestionRandomizerAuthFeatureEmailConfirmComponent', () => {
  let component: QuestionRandomizerAuthFeatureEmailConfirmComponent;
  let fixture: ComponentFixture<QuestionRandomizerAuthFeatureEmailConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionRandomizerAuthFeatureEmailConfirmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      QuestionRandomizerAuthFeatureEmailConfirmComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
