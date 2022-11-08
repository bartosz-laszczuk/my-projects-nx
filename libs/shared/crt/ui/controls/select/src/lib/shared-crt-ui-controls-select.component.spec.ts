import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCrtUiControlsSelectComponent } from './shared-crt-ui-controls-select.component';

describe('SharedCrtUiControlsSelectComponent', () => {
  let component: SharedCrtUiControlsSelectComponent;
  let fixture: ComponentFixture<SharedCrtUiControlsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCrtUiControlsSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedCrtUiControlsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
