import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalscorersComponent } from './goalscorers.component';

describe('GoalscorersComponent', () => {
  let component: GoalscorersComponent;
  let fixture: ComponentFixture<GoalscorersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalscorersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalscorersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
