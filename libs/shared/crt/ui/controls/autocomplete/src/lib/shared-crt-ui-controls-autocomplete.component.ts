import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-projects-nx-shared-crt-ui-controls-autocomplete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-crt-ui-controls-autocomplete.component.html',
  styleUrls: ['./shared-crt-ui-controls-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedCrtUiControlsAutocompleteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
