import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-projects-nx-shared-crt-ui-controls-date',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-crt-ui-controls-date.component.html',
  styleUrls: ['./shared-crt-ui-controls-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiCrtControlsDateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
