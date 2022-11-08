import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRandomizerAuthFeatureLoginComponent } from './shared-question-randomizer-auth-feature-login.component';

describe('QuestionRandomizerAuthFeatureLoginComponent', () => {
  let component: QuestionRandomizerAuthFeatureLoginComponent;
  let fixture: ComponentFixture<QuestionRandomizerAuthFeatureLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionRandomizerAuthFeatureLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      QuestionRandomizerAuthFeatureLoginComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
