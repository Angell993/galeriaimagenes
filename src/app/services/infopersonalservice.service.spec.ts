import { TestBed } from '@angular/core/testing';

import { InfopersonalserviceService } from './infopersonalservice.service';

describe('InfopersonalserviceService', () => {
  let service: InfopersonalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfopersonalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
