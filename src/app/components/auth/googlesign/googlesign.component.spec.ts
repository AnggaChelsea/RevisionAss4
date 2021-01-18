import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglesignComponent } from './googlesign.component';

describe('GooglesignComponent', () => {
  let component: GooglesignComponent;
  let fixture: ComponentFixture<GooglesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
