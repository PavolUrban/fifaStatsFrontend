import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H2HComponent } from './h2-h.component';

describe('H2HComponent', () => {
  let component: H2HComponent;
  let fixture: ComponentFixture<H2HComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H2HComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H2HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
