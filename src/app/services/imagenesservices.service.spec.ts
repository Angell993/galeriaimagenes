import { TestBed } from '@angular/core/testing';

import { ImagenesservicesService } from './imagenesservices.service';

describe('ImagenesservicesService', () => {
  let service: ImagenesservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenesservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
