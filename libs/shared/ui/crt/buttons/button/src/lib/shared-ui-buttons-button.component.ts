import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonType = 'button' | 'submit';

@Component({
  selector: 'my-projects-nx-shared-ui-buttons-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-ui-buttons-button.component.html',
  styleUrls: ['./shared-ui-buttons-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiCrtButtonsButtonComponent {
  @Input() type: ButtonType = 'button';
  @Input() disabled = false;
  @Input() stretch = false;
}
