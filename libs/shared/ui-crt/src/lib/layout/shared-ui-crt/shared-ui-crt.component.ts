import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-projects-nx-shared-ui-crt',
  standalone: true,
  templateUrl: './shared-ui-crt.component.html',
  styleUrls: ['./shared-ui-crt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedLayoutUiCrtComponent {}
