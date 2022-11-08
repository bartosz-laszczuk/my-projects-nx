import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiCrtControlsFormFieldComponent } from './shared-crt-ui-controls-form-field.component';

describe('SharedUiCrtControlsFormFieldComponent', () => {
  let component: SharedUiCrtControlsFormFieldComponent;
  let fixture: ComponentFixture<SharedUiCrtControlsFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiCrtControlsFormFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiCrtControlsFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
