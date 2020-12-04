import { TestBed } from '@angular/core/testing';

import { NameGuardGuard } from './name-guard.guard';

describe('NameGuardGuard', () => {
  let guard: NameGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NameGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
