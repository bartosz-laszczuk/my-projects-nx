import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreakpointsService } from '@my-projects-nx/question-randomizer/shell/util/services';

@Component({
  selector: 'my-projects-nx-question-randomizer-shell-ui-logo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './question-randomizer-shell-ui-logo.component.html',
  styleUrls: ['./question-randomizer-shell-ui-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerShellUiLogoComponent implements OnInit {
  showContainer = true;
  constructor(
    private cdr: ChangeDetectorRef,
    private breakpointService: BreakpointsService
  ) {}

  ngOnInit() {
    this.breakpointService.breakpointHit.subscribe((breakpoint) =>
      console.log(breakpoint)
    );
  }
}
