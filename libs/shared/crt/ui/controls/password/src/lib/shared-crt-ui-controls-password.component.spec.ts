import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCrtUiControlsPasswordComponent } from './shared-crt-ui-controls-password.component';

describe('SharedCrtUiControlsPasswordComponent', () => {
  let component: SharedCrtUiControlsPasswordComponent;
  let fixture: ComponentFixture<SharedCrtUiControlsPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCrtUiControlsPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedCrtUiControlsPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
