import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiCrtControlsSelectComponent } from './shared-crt-ui-controls-select.component';

describe('SharedUiCrtControlsSelectComponent', () => {
  let component: SharedUiCrtControlsSelectComponent;
  let fixture: ComponentFixture<SharedUiCrtControlsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiCrtControlsSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiCrtControlsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
