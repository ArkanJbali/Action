import { TestBed } from '@angular/core/testing';

import { AddActionService } from './add-action.service';

describe('AddActionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddActionService = TestBed.get(AddActionService);
    expect(service).toBeTruthy();
  });
});
