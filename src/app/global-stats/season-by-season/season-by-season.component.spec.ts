import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonBySeasonComponent } from './season-by-season.component';

describe('SeasonBySeasonComponent', () => {
  let component: SeasonBySeasonComponent;
  let fixture: ComponentFixture<SeasonBySeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonBySeasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonBySeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
