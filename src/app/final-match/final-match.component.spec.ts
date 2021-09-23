import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FinalMatchComponent } from './final-match.component';

describe('FinalMatchComponent', () => {
  let component: FinalMatchComponent;
  let fixture: ComponentFixture<FinalMatchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
