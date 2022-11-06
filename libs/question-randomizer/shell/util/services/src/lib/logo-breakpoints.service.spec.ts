import { TestBed } from '@angular/core/testing';

import { LogoBreakpointsService } from './logo-breakpoints.service';

describe('BreakpointsService', () => {
  let service: LogoBreakpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoBreakpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
