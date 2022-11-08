import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCrtUiControlsAutocompleteComponent } from './shared-crt-ui-controls-autocomplete.component';

describe('SharedCrtUiControlsAutocompleteComponent', () => {
  let component: SharedCrtUiControlsAutocompleteComponent;
  let fixture: ComponentFixture<SharedCrtUiControlsAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCrtUiControlsAutocompleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedCrtUiControlsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
