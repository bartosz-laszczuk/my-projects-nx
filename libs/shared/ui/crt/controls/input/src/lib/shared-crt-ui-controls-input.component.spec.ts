import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiCrtControlsInputComponent } from './shared-crt-ui-controls-input.component';

describe('SharedUiCrtControlsInputComponent', () => {
  let component: SharedUiCrtControlsInputComponent;
  let fixture: ComponentFixture<SharedUiCrtControlsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiCrtControlsInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiCrtControlsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
