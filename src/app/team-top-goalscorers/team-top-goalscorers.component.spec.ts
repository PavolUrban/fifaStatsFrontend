import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeamTopGoalscorersComponent } from './team-top-goalscorers.component';

describe('TeamTopGoalscorersComponent', () => {
  let component: TeamTopGoalscorersComponent;
  let fixture: ComponentFixture<TeamTopGoalscorersComponent>;

  beforeEach(waitForAsync(() => {
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
