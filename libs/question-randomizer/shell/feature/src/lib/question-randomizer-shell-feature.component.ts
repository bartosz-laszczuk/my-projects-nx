import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  getIsAuthorized,
  getUser,
  getUserState,
  initUser,
  signOut,
} from '@my-projects-nx/question-randomizer/auth/data-access/store';
import { User } from '@my-projects-nx/question-randomizer/shared/util/models';
import { LogoBreakpointsService } from '@my-projects-nx/question-randomizer/shell/util/services';
import { select, Store } from '@ngrx/store';
import { filter, Observable, take } from 'rxjs';

@Component({
  selector: 'my-projects-nx-question-randomizer-shell-feature',
  templateUrl: './question-randomizer-shell-feature.component.html',
  styleUrls: ['./question-randomizer-shell-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRandomizerShellFeatureComponent {
  title = 'question-randomizer';

  isAuthorized$: Observable<boolean> = this.store.pipe(select(getIsAuthorized));
  user$: Observable<User | null> = this.store.pipe(select(getUser));
  breakpoint$ = this.logoBreakpointsService.breakpointHit$;
  constructor(
    private store: Store,
    private logoBreakpointsService: LogoBreakpointsService // private serviceWorkerConfiguration: ServiceWorkerConfigurationService
  ) {}

  ngOnInit() {
    // this.isAuthorized$ = this.store.pipe(select(getIsAuthorized));
    // this.user$ = this.store.pipe(select(getUser));

    this.store
      .pipe(select(getUserState))
      .pipe(
        filter((state) => !!state.uid),
        take(1)
      )
      .subscribe(() => {
        // this.store.dispatch(loadDictionaries());
      });

    // this.serviceWorkerConfiguration.init();
  }

  onSignOut() {
    this.store.dispatch(signOut());
  }
}
function loadDictionaries(): any {
  throw new Error('Function not implemented.');
}
