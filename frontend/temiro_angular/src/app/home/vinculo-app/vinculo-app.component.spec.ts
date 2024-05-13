/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VinculoAppComponent } from './vinculo-app.component';

describe('VinculoAppComponent', () => {
  let component: VinculoAppComponent;
  let fixture: ComponentFixture<VinculoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinculoAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
