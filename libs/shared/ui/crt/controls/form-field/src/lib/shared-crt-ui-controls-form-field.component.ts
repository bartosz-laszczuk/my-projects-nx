import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'my-projects-nx-shared-crt-ui-controls-form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-crt-ui-controls-form-field.component.html',
  styleUrls: ['./shared-crt-ui-controls-form-field.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiCrtControlsFormFieldComponent {
  @Input() label: string;
  @Input() required: boolean;
  @Input() isInline: boolean;
  @Input() control: AbstractControl;
  @Input() patternError: string;

  constructor() {
    this.isInline = false;
  }

  hasError(): boolean {
    return this.control && this.control.invalid && this.control.touched;
  }

  get errorKey() {
    return (
      this.control && this.control.errors && Object.keys(this.control.errors)[0]
    );
  }
}
