import { TestBed } from '@angular/core/testing';

import { GetalluserdataService } from './getalluserdata.service';

describe('GetalluserdataService', () => {
  let service: GetalluserdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetalluserdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
