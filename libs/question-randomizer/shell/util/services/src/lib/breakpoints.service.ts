import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Breakpoints {
  Default = 0,
  TabBigLand = '(max-width: 102em)',
  TabLand = '(max-width: 80em)',
  Tab = '(max-width: 50em)',
}

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService {
  public breakpointHit = new BehaviorSubject<Breakpoints>(Breakpoints.Default);
  constructor(public breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([
        Breakpoints.Tab.toString(),
        Breakpoints.TabLand.toString(),
        Breakpoints.TabBigLand.toString(),
      ])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          const matches = Object.entries(state.breakpoints).find(
            (entry) => !!entry[1]
          ) as [string, boolean];
          this.breakpointHit.next(matches[0] as Breakpoints);
        } else {
          this.breakpointHit.next(Breakpoints.Default);
        }
      });
  }
}
