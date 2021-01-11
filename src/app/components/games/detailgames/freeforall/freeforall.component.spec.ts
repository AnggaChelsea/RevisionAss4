import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {RouterTestingModule}from '@angular/router/testing';
import {FormBuilder} from '@angular/forms'

import { FreeforallComponent } from './freeforall.component';

describe('FreeforallComponent', () => {
  let component: FreeforallComponent;
  let fixture: ComponentFixture<FreeforallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeforallComponent ],imports: [HttpClientTestingModule,RouterTestingModule],providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeforallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
