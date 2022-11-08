import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiCrtControlsRadiosComponent } from './shared-crt-ui-controls-radios.component';

describe('SharedUiCrtControlsRadiosComponent', () => {
  let component: SharedUiCrtControlsRadiosComponent;
  let fixture: ComponentFixture<SharedUiCrtControlsRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiCrtControlsRadiosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiCrtControlsRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
