import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modelform2Component } from './modelform2.component';

describe('Modelform2Component', () => {
  let component: Modelform2Component;
  let fixture: ComponentFixture<Modelform2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modelform2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modelform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
