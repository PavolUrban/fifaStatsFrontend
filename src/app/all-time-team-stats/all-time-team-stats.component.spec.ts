import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeTeamStatsComponent } from './all-time-team-stats.component';

describe('AllTimeTeamStatsComponent', () => {
  let component: AllTimeTeamStatsComponent;
  let fixture: ComponentFixture<AllTimeTeamStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTimeTeamStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTimeTeamStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
