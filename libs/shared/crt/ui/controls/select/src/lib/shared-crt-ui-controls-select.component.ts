import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-projects-nx-shared-crt-ui-controls-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-crt-ui-controls-select.component.html',
  styleUrls: ['./shared-crt-ui-controls-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedCrtUiControlsSelectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
