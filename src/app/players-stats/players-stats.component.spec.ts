import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlayersStatsComponent } from './players-stats.component';

describe('PlayersStatsComponent', () => {
  let component: PlayersStatsComponent;
  let fixture: ComponentFixture<PlayersStatsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
