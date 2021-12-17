import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGoalscorersComponent } from './new-goalscorers.component';

describe('NewGoalscorersComponent', () => {
  let component: NewGoalscorersComponent;
  let fixture: ComponentFixture<NewGoalscorersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGoalscorersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGoalscorersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
