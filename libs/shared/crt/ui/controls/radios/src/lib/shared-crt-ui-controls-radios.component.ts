import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-projects-nx-shared-crt-ui-controls-radios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-crt-ui-controls-radios.component.html',
  styleUrls: ['./shared-crt-ui-controls-radios.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedCrtUiControlsRadiosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
