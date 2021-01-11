import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {RouterTestingModule}from '@angular/router/testing';

import { RoletournamentComponent } from './roletournament.component';

describe('RoletournamentComponent', () => {
  let component: RoletournamentComponent;
  let fixture: ComponentFixture<RoletournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoletournamentComponent ],imports: [HttpClientTestingModule,RouterTestingModule]
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
