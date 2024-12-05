import { TestBed } from '@angular/core/testing';

import { BlankapiService } from './blankapi.service';

describe('BlankapiService', () => {
  let service: BlankapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlankapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
