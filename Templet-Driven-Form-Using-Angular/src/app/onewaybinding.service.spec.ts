import { TestBed } from '@angular/core/testing';

import { OnewaybindingService } from './onewaybinding.service';

describe('OnewaybindingService', () => {
  let service: OnewaybindingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnewaybindingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
