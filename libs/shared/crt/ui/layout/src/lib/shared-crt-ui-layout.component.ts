import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-projects-nx-shared-crt-ui-layout',
  standalone: true,
  templateUrl: './shared-crt-ui-layout.component.html',
  styleUrls: ['./shared-crt-ui-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedCrtUiLayoutComponent {}
