import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLayoutUiCrtComponent } from '@my-projects-nx/shared/ui-crt';
import { RouterModule } from '@angular/router';
import { QuestionRandomizerShellUiHeaderComponent } from '../../../header/src/lib/question-randomizer-shell-ui-header.component';

@Component({
  selector: 'my-projects-nx-question-randomizer-shell-layout',
  standalone: true,
  imports: [
    CommonModule,
    SharedLayoutUiCrtComponent,
    RouterModule,
    QuestionRandomizerShellUiHeaderComponent,
  ],
  templateUrl: './question-randomizer-shell-layout.component.html',
  styleUrls: ['./question-randomizer-shell-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerShellUiLayoutComponent {}
