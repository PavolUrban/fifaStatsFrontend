import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTopGoalscorersComponent } from './team-top-goalscorers.component';

describe('TeamTopGoalscorersComponent', () => {
  let component: TeamTopGoalscorersComponent;
  let fixture: ComponentFixture<TeamTopGoalscorersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTopGoalscorersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTopGoalscorersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
