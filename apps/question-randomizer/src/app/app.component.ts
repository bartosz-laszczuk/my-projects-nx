import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-projects-nx-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'question-randomizer';
}
