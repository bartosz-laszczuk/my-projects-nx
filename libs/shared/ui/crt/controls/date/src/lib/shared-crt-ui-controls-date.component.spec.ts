import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiCrtControlsDateComponent } from './shared-crt-ui-controls-date.component';

describe('SharedUiCrtControlsDateComponent', () => {
  let component: SharedUiCrtControlsDateComponent;
  let fixture: ComponentFixture<SharedUiCrtControlsDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiCrtControlsDateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiCrtControlsDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
