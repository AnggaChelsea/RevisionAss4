import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacommiteComponent } from './datacommite.component';

describe('DatacommiteComponent', () => {
  let component: DatacommiteComponent;
  let fixture: ComponentFixture<DatacommiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatacommiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacommiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
