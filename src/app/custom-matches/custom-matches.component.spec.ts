import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMatchesComponent } from './custom-matches.component';

describe('CustomMatchesComponent', () => {
  let component: CustomMatchesComponent;
  let fixture: ComponentFixture<CustomMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
