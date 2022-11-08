import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCrtUiControlsRadiosComponent } from './shared-crt-ui-controls-radios.component';

describe('SharedCrtUiControlsRadiosComponent', () => {
  let component: SharedCrtUiControlsRadiosComponent;
  let fixture: ComponentFixture<SharedCrtUiControlsRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCrtUiControlsRadiosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedCrtUiControlsRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
