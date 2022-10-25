import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-projects-nx-shared-layout-ui-crt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-layout-ui-crt.component.html',
  styleUrls: ['./shared-layout-ui-crt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None,
})
export class SharedLayoutUiCrtComponent {}
