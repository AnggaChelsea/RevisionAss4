import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTablesModule } from 'angular-datatables'
import { ParticipantComponent } from './participant.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ParticipantComponent', () => {
  let component: ParticipantComponent;
  let fixture: ComponentFixture<ParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantComponent ],imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
