import { TestBed } from '@angular/core/testing';

import { ApplicationInitService } from './application-init.service';

describe('ApplicationInitService', () => {
  let service: ApplicationInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
