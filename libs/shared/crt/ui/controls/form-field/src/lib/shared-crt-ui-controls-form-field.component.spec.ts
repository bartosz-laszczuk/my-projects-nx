import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCrtUiControlsFormFieldComponent } from './shared-crt-ui-controls-form-field.component';

describe('SharedCrtUiControlsFormFieldComponent', () => {
  let component: SharedCrtUiControlsFormFieldComponent;
  let fixture: ComponentFixture<SharedCrtUiControlsFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCrtUiControlsFormFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedCrtUiControlsFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
