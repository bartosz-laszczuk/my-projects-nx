import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiCrtIndicatorsSpinnerComponent } from './shared-ui-crt-indicators-spinner.component';

describe('SharedUiCrtIndicatorsSpinnerComponent', () => {
  let component: SharedUiCrtIndicatorsSpinnerComponent;
  let fixture: ComponentFixture<SharedUiCrtIndicatorsSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiCrtIndicatorsSpinnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiCrtIndicatorsSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
