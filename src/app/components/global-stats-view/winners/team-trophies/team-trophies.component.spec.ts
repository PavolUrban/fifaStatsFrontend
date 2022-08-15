import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTrophiesComponent } from './team-trophies.component';

describe('TeamTrophiesComponent', () => {
  let component: TeamTrophiesComponent;
  let fixture: ComponentFixture<TeamTrophiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamTrophiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTrophiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
