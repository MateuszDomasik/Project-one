import { TestBed } from '@angular/core/testing';

import { PrimengWrapperService } from './primeng-wrapper.service';

describe('PrimengWrapperService', () => {
  let service: PrimengWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimengWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
