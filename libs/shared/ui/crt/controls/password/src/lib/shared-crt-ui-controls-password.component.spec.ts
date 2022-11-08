import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiCrtControlsPasswordComponent } from './shared-crt-ui-controls-password.component';

describe('SharedUiCrtControlsPasswordComponent', () => {
  let component: SharedUiCrtControlsPasswordComponent;
  let fixture: ComponentFixture<SharedUiCrtControlsPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiCrtControlsPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiCrtControlsPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
