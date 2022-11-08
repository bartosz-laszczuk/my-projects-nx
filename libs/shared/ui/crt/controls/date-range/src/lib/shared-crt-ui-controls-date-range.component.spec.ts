import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiCrtControlsDateRangeComponent } from './shared-crt-ui-controls-date-range.component';

describe('SharedUiCrtControlsDateRangeComponent', () => {
  let component: SharedUiCrtControlsDateRangeComponent;
  let fixture: ComponentFixture<SharedUiCrtControlsDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiCrtControlsDateRangeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiCrtControlsDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
