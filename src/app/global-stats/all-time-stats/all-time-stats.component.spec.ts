import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllTimeStatsComponent } from './all-time-stats.component';

describe('AllTimeStatsComponent', () => {
  let component: AllTimeStatsComponent;
  let fixture: ComponentFixture<AllTimeStatsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTimeStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTimeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
