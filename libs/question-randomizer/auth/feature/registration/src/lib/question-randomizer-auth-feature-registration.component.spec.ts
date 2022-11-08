import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRandomizerAuthFeatureRegistrationComponent } from './question-randomizer-auth-feature-registration.component';

describe('QuestionRandomizerAuthFeatureRegistrationComponent', () => {
  let component: QuestionRandomizerAuthFeatureRegistrationComponent;
  let fixture: ComponentFixture<QuestionRandomizerAuthFeatureRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionRandomizerAuthFeatureRegistrationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      QuestionRandomizerAuthFeatureRegistrationComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
