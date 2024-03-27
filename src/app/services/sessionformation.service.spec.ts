import { TestBed } from '@angular/core/testing';

import { SessionFormationService } from './sessionformation.service';

describe('SessionformationService', () => {
  let service: SessionFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
