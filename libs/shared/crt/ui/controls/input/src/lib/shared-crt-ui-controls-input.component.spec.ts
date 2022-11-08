import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCrtUiControlsInputComponent } from './shared-crt-ui-controls-input.component';

describe('SharedCrtUiControlsInputComponent', () => {
  let component: SharedCrtUiControlsInputComponent;
  let fixture: ComponentFixture<SharedCrtUiControlsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCrtUiControlsInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedCrtUiControlsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
