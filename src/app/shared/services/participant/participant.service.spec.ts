import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ParticipantService } from './participant.service';

describe('ParticipantService', () => {
  // let service: BracketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ParticipantService]
    });
    // service = TestBed.inject(BracketService);
  });

  it('should be created', () => {
    const service:ParticipantService = TestBed.get(ParticipantService);
    expect(service).toBeTruthy();
  });
});
