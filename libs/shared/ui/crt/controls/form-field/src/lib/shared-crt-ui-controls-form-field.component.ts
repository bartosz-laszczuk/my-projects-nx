import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-projects-nx-shared-crt-ui-controls-form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-crt-ui-controls-form-field.component.html',
  styleUrls: ['./shared-crt-ui-controls-form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiCrtControlsFormFieldComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
