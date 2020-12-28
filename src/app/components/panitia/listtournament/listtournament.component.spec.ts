import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtournamentComponent } from './listtournament.component';

describe('ListtournamentComponent', () => {
  let component: ListtournamentComponent;
  let fixture: ComponentFixture<ListtournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
