import { TestBed } from '@angular/core/testing';

import { PoderesService } from './poderes.service';

describe('PoderesService', () => {
  let service: PoderesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoderesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
