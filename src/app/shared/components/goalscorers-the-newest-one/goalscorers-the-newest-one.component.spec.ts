import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalscorersTheNewestOneComponent } from './goalscorers-the-newest-one.component';

describe('GoalscorersTheNewestOneComponent', () => {
  let component: GoalscorersTheNewestOneComponent;
  let fixture: ComponentFixture<GoalscorersTheNewestOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalscorersTheNewestOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalscorersTheNewestOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
