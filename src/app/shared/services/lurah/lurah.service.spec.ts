import { TestBed } from '@angular/core/testing';

import { LurahService } from './lurah.service';

describe('LurahService', () => {
  let service: LurahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LurahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
