import { TestBed } from '@angular/core/testing';

import { AuthGeneralService } from './auth-general.service';

describe('AuthGeneralService', () => {
  let service: AuthGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
