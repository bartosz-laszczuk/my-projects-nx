import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { QuestionRandomizerShellUiLogoComponent } from '@my-projects-nx/question-randomizer/shell/ui/logo';
import { LogoBreakpoint } from '@my-projects-nx/question-randomizer/shell/util/services';

@Component({
  selector: 'my-projects-nx-question-randomizer-shell-ui-header',
  standalone: true,
  imports: [CommonModule, RouterModule, QuestionRandomizerShellUiLogoComponent],
  templateUrl: './question-randomizer-shell-ui-header.component.html',
  styleUrls: ['./question-randomizer-shell-ui-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerShellUiHeaderComponent {
  @Input() breakpoint: LogoBreakpoint | null = null;
  @Input() user: any; //User | null;
  @Input() isAuthorized = false;
  @Output() signOut = new EventEmitter<void>();

  constructor(private router: Router) {}

  onSignOut(): void {
    this.signOut.emit();
  }

  onProfileNavigate(): void {
    const path = this.user ? this.user.uid : 'new';
    this.router.navigate(['/profile', path]);
  }
}
