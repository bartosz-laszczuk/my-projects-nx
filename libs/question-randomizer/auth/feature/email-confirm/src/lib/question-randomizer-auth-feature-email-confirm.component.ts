import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-projects-nx-question-randomizer-auth-feature-email-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl:
    './question-randomizer-auth-feature-email-confirm.component.html',
  styleUrls: [
    './question-randomizer-auth-feature-email-confirm.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerAuthFeatureEmailConfirmComponent
  implements OnInit
{
  constructor() {}

  ngOnInit(): void {}
}
