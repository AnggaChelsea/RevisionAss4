import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbracketComponent } from './allbracket.component';

describe('AllbracketComponent', () => {
  let component: AllbracketComponent;
  let fixture: ComponentFixture<AllbracketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllbracketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
