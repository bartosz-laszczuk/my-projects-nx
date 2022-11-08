import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCrtUiControlsCheckboxesComponent } from './shared-crt-ui-controls-checkboxes.component';

describe('SharedCrtUiControlsCheckboxesComponent', () => {
  let component: SharedCrtUiControlsCheckboxesComponent;
  let fixture: ComponentFixture<SharedCrtUiControlsCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCrtUiControlsCheckboxesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedCrtUiControlsCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
