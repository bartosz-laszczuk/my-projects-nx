import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoBreakpointsService } from '@my-projects-nx/question-randomizer/shell/util/services';

@Component({
  selector: 'my-projects-nx-question-randomizer-shell-feature',
  templateUrl: './question-randomizer-shell-feature.component.html',
  styleUrls: ['./question-randomizer-shell-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerShellFeatureComponent {
  breakpoint$ = this.logoBreakpointsService.breakpointHit$;
  constructor(private logoBreakpointsService: LogoBreakpointsService) {}
}
