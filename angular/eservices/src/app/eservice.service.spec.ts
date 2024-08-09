import { TestBed } from '@angular/core/testing';

import { EserviceService } from './eservice.service';

describe('EserviceService', () => {
  let service: EserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
