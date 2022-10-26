import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-projects-nx-shared-layout-ui-crt',
  standalone: true,
  templateUrl: './shared-layout-ui-crt.component.html',
  styleUrls: ['./shared-layout-ui-crt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedLayoutUiCrtComponent {}
