import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiCrtControlsCheckboxesComponent } from './shared-crt-ui-controls-checkboxes.component';

describe('SharedUiCrtControlsCheckboxesComponent', () => {
  let component: SharedUiCrtControlsCheckboxesComponent;
  let fixture: ComponentFixture<SharedUiCrtControlsCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiCrtControlsCheckboxesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiCrtControlsCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
