import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import {
  getIsAuthorized,
  getUser,
  getUserState,
  signOut,
} from '@my-projects-nx/question-randomizer/auth/data-access/store';
import { CommonFacade } from '@my-projects-nx/question-randomizer/shared/data-access/store/common';
import { loadDictionaries } from '@my-projects-nx/question-randomizer/shared/data-access/store/dictionaries';
import { User } from '@my-projects-nx/question-randomizer/shared/util/models/backend';
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
  isDialogVisible$ = this.commonFacade.isDialogVisible$;
  constructor(
    private router: Router,
    private store: Store,
    private logoBreakpointsService: LogoBreakpointsService,
    private commonFacade: CommonFacade,
    private matDialog: MatDialog // private serviceWorkerConfiguration: ServiceWorkerConfigurationService
  ) {}

  ngOnInit() {
    // this.isAuthorized$ = this.store.pipe(select(getIsAuthorized));
    // this.user$ = this.store.pipe(select(getUser));
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.matDialog.closeAll();
        this.commonFacade.changeDialogVisibility(false);
      }
    });

    this.matDialog.afterOpened.subscribe(() =>
      this.commonFacade.changeDialogVisibility(true)
    );

    this.matDialog.afterAllClosed.subscribe(() =>
      this.commonFacade.changeDialogVisibility(false)
    );

    this.store
      .pipe(select(getUserState))
      .pipe(
        filter((state) => !!state.uid),
        take(1)
      )
      .subscribe(() => {
        this.store.dispatch(loadDictionaries());
      });

    // this.serviceWorkerConfiguration.init();
  }

  onSignOut() {
    this.store.dispatch(signOut());
  }
}
