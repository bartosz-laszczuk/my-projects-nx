import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiCrtControlsAutocompleteComponent } from './shared-crt-ui-controls-autocomplete.component';

describe('SharedUiCrtControlsAutocompleteComponent', () => {
  let component: SharedUiCrtControlsAutocompleteComponent;
  let fixture: ComponentFixture<SharedUiCrtControlsAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiCrtControlsAutocompleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiCrtControlsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
