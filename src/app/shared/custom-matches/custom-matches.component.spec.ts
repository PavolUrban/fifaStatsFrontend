import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomMatchesComponent } from './custom-matches.component';

describe('CustomMatchesComponent', () => {
  let component: CustomMatchesComponent;
  let fixture: ComponentFixture<CustomMatchesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
