import { TestBed } from '@angular/core/testing';

import { IsDevModeService } from './is-dev-mode.service';

describe('IsDevModeService', () => {
  let service: IsDevModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsDevModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.isDevMode()).toBeDefined()
  });
});
