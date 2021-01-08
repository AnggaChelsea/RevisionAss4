import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PanitiaComponent } from './panitia.component';

describe('PanitiaComponent', () => {
  let component: PanitiaComponent;
  let fixture: ComponentFixture<PanitiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanitiaComponent ], imports: [RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanitiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
