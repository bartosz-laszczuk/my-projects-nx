import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiCrtIndicatorsProgressBarComponent } from './shared-ui-crt-indicators-progress-bar.component';

describe('SharedUiCrtIndicatorsProgressBarComponent', () => {
  let component: SharedUiCrtIndicatorsProgressBarComponent;
  let fixture: ComponentFixture<SharedUiCrtIndicatorsProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiCrtIndicatorsProgressBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      SharedUiCrtIndicatorsProgressBarComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
