import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import {
  ControlItem,
  Value,
} from '@my-projects-nx/question-randomizer/shared/util/models/frontend';

@Component({
  selector: 'my-projects-nx-shared-crt-ui-controls-select',
  standalone: true,
  imports: [CommonModule, MatSelectModule],
  templateUrl: './shared-crt-ui-controls-select.component.html',
  styleUrls: ['./shared-crt-ui-controls-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SharedUiCrtControlsSelectComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiCrtControlsSelectComponent
  implements ControlValueAccessor
{
  @Input() items: ControlItem[] | undefined;
  @Input() placeholder: string;
  @Output() changed = new EventEmitter<Value>();

  value: Value;
  isDisabled: boolean;

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  writeValue(value: Value): void {
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

  onChangedPureHtmlSelect(event: Event) {
    const value = (event as any)?.target?.value
      ? (event as any).target.value
      : null;

    this.value = value;
    this.propagateChange(value);
    this.changed.emit(value);
  }

  onChanged(event: MatSelectChange): void {
    const value = event.value ? event.value : null;

    this.value = value;
    this.propagateChange(value);
    this.changed.emit(value);
  }

  onBlur(): void {
    this.propagateTouched();
  }
}
