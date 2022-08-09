import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H2hSeasonBySeasonComponent } from './h2h-season-by-season.component';

describe('H2hSeasonBySeasonComponent', () => {
  let component: H2hSeasonBySeasonComponent;
  let fixture: ComponentFixture<H2hSeasonBySeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H2hSeasonBySeasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H2hSeasonBySeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
