import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoletournamentComponent } from './roletournament.component';

describe('RoletournamentComponent', () => {
  let component: RoletournamentComponent;
  let fixture: ComponentFixture<RoletournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoletournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoletournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
