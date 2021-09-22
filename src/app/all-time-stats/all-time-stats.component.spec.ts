import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeStatsComponent } from './all-time-stats.component';

describe('AllTimeStatsComponent', () => {
  let component: AllTimeStatsComponent;
  let fixture: ComponentFixture<AllTimeStatsComponent>;

  beforeEach(async(() => {
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
