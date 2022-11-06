import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoBreakpointsService } from '@my-projects-nx/question-randomizer/shell/util/services';
import { tap } from 'rxjs';

@Component({
  selector: 'my-projects-nx-question-randomizer-shell-feature',
  templateUrl: './question-randomizer-shell-feature.component.html',
  styleUrls: ['./question-randomizer-shell-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerShellFeatureComponent {
  breakpoint$ = this.logoBreakpointsService.breakpointHit$.pipe(
    tap((breakpoint) => console.log(breakpoint))
  );
  constructor(private logoBreakpointsService: LogoBreakpointsService) {}
}
