import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'my-projects-nx-shared-ui-crt-indicators-section',
  templateUrl: './shared-ui-crt-indicators-section.component.html',
  standalone: true,
  styleUrls: ['./shared-ui-crt-indicators-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiCrtIndicatorsSectionComponent {
  @Input() header = '';
  @Input() height = 'auto';
}
