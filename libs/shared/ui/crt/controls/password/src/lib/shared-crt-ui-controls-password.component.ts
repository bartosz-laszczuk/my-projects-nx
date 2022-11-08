import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-projects-nx-shared-crt-ui-controls-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-crt-ui-controls-password.component.html',
  styleUrls: ['./shared-crt-ui-controls-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiCrtControlsPasswordComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
