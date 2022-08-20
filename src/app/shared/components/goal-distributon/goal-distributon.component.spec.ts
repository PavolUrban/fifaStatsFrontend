import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalDistributonComponent } from './goal-distributon.component';

describe('GoalDistributonComponent', () => {
  let component: GoalDistributonComponent;
  let fixture: ComponentFixture<GoalDistributonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalDistributonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalDistributonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
