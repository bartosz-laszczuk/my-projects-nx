import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-projects-nx-shared-ui-crt-indicators-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-ui-crt-indicators-spinner.component.html',
  styleUrls: ['./shared-ui-crt-indicators-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiCrtIndicatorsSpinnerComponent {}
