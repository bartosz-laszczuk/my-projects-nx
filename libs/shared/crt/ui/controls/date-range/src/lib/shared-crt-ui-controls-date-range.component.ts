import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-projects-nx-shared-crt-ui-controls-date-range',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-crt-ui-controls-date-range.component.html',
  styleUrls: ['./shared-crt-ui-controls-date-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedCrtUiControlsDateRangeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
