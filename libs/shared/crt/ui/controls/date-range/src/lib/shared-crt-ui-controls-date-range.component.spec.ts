import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCrtUiControlsDateRangeComponent } from './shared-crt-ui-controls-date-range.component';

describe('SharedCrtUiControlsDateRangeComponent', () => {
  let component: SharedCrtUiControlsDateRangeComponent;
  let fixture: ComponentFixture<SharedCrtUiControlsDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCrtUiControlsDateRangeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedCrtUiControlsDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
