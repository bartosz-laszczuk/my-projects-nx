import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

type PasswordType = 'password' | 'text';

@Component({
  selector: 'my-projects-nx-shared-crt-ui-controls-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-crt-ui-controls-password.component.html',
  styleUrls: ['./shared-crt-ui-controls-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SharedUiCrtControlsPasswordComponent),
      multi: true,
    },
  ],
})
export class SharedUiCrtControlsPasswordComponent {
  @Input() placeholder = '';

  @Output() changed = new EventEmitter<string>();

  value = '';
  isDisabled = false;
  passwordType: PasswordType;

  constructor() {
    this.passwordType = 'password';
  }

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onKeyup(event: any): void {
    this.value = event.target.value;
    this.propagateChange(this.value);
    this.changed.emit(this.value);
  }

  onBlur(): void {
    this.propagateTouched();
  }

  togglePassword(): void {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
