import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'my-projects-nx-question-randomizer-shell-ui-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './question-randomizer-shell-ui-header.component.html',
  styleUrls: ['./question-randomizer-shell-ui-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerShellUiHeaderComponent {
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
