import { TestBed } from '@angular/core/testing';

import { TypeFormationService } from './typeformation.service';

describe('TypeformationService', () => {
  let service: TypeFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
