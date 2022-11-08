import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-projects-nx-question-randomizer-auth-feature-registration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-randomizer-auth-feature-registration.component.html',
  styleUrls: ['./question-randomizer-auth-feature-registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerAuthFeatureRegistrationComponent
  implements OnInit
{
  constructor() {}

  ngOnInit(): void {}
}
