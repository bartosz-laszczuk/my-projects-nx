import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-projects-nx-shared-crt-ui-controls-checkboxes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-crt-ui-controls-checkboxes.component.html',
  styleUrls: ['./shared-crt-ui-controls-checkboxes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiCrtControlsCheckboxesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
