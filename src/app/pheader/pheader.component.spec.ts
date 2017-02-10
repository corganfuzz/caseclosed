/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PheaderComponent } from './pheader.component';

describe('PheaderComponent', () => {
  let component: PheaderComponent;
  let fixture: ComponentFixture<PheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
