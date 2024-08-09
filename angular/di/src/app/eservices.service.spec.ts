import { TestBed } from '@angular/core/testing';

import { EservicesService } from './eservices.service';

describe('EservicesService', () => {
  let service: EservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
