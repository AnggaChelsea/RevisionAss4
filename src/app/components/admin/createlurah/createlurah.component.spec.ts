import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelurahComponent } from './createlurah.component';

describe('CreatelurahComponent', () => {
  let component: CreatelurahComponent;
  let fixture: ComponentFixture<CreatelurahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatelurahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
