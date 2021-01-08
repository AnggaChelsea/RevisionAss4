import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {RouterTestingModule}from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { PanitiaService } from './panitia.service';

describe('PanitiaService', () => {
  // let service: BracketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [PanitiaService]
    });
    // service = TestBed.inject(BracketService);
  });

  it('should be created', () => {
    const service:PanitiaService = TestBed.get(PanitiaService);
    expect(service).toBeTruthy();
  });
});
