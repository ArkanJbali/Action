import { TestBed } from '@angular/core/testing';

import { CheckPermessionService } from './check-permession.service';

describe('CheckPermessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckPermessionService = TestBed.get(CheckPermessionService);
    expect(service).toBeTruthy();
  });
});
