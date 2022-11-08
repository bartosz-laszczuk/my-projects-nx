import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-projects-nx-shared-crt-ui-controls-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-crt-ui-controls-input.component.html',
  styleUrls: ['./shared-crt-ui-controls-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedCrtUiControlsInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
