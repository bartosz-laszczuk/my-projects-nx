import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoBreakpoint } from '@my-projects-nx/question-randomizer/shell/util/services';

@Component({
  selector: 'my-projects-nx-question-randomizer-shell-ui-logo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './question-randomizer-shell-ui-logo.component.html',
  styleUrls: ['./question-randomizer-shell-ui-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerShellUiLogoComponent {
  @Input() breakpoint: LogoBreakpoint | null = null;
  constructor(private cdr: ChangeDetectorRef) {}

  logoBreakpointEnum = LogoBreakpoint;
}
