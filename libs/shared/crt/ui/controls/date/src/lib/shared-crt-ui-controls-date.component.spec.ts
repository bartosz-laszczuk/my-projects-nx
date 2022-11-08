import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCrtUiControlsDateComponent } from './shared-crt-ui-controls-date.component';

describe('SharedCrtUiControlsDateComponent', () => {
  let component: SharedCrtUiControlsDateComponent;
  let fixture: ComponentFixture<SharedCrtUiControlsDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCrtUiControlsDateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedCrtUiControlsDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
