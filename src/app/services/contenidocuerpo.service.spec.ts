import { TestBed } from '@angular/core/testing';

import { ContenidocuerpoService } from './contenidocuerpo.service';

describe('ContenidocuerpoService', () => {
  let service: ContenidocuerpoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContenidocuerpoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
