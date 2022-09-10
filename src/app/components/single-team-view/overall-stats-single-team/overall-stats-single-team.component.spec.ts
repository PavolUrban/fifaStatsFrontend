import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallStatsSingleTeamComponent } from './overall-stats-single-team.component';

describe('OverallStatsSingleTeamComponent', () => {
  let component: OverallStatsSingleTeamComponent;
  let fixture: ComponentFixture<OverallStatsSingleTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallStatsSingleTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallStatsSingleTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
