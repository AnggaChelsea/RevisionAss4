import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { BracketService } from './bracket.service';

describe('BracketService', () => {
  // let service: BracketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BracketService]
    });
    // service = TestBed.inject(BracketService);
  });

  it('should be created', () => {
    const service:BracketService = TestBed.get(BracketService);
    expect(service).toBeTruthy();
  });
});
