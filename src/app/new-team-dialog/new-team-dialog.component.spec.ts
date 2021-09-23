import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewTeamDialogComponent } from './new-team-dialog.component';

describe('NewTeamDialogComponent', () => {
  let component: NewTeamDialogComponent;
  let fixture: ComponentFixture<NewTeamDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTeamDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTeamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
