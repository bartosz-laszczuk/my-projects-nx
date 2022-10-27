import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLayoutUiCrtComponent } from './shared-ui-crt.component';

describe('SharedLayoutUiCrtComponent', () => {
  let component: SharedLayoutUiCrtComponent;
  let fixture: ComponentFixture<SharedLayoutUiCrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedLayoutUiCrtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedLayoutUiCrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
