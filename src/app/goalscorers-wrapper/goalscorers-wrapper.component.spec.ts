import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalscorersWrapperComponent } from './goalscorers-wrapper.component';

describe('GoalscorersWrapperComponent', () => {
  let component: GoalscorersWrapperComponent;
  let fixture: ComponentFixture<GoalscorersWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalscorersWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalscorersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
