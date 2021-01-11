import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  // let service: BracketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [ProfileService]
    });
    // service = TestBed.inject(BracketService);
  });

  it('should be created', () => {
    const service:ProfileService = TestBed.get(ProfileService);
    expect(service).toBeTruthy();
  });
});
