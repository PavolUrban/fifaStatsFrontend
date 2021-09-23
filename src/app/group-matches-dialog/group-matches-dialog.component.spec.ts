import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroupMatchesDialogComponent } from './group-matches-dialog.component';

describe('GroupMatchesDialogComponent', () => {
  let component: GroupMatchesDialogComponent;
  let fixture: ComponentFixture<GroupMatchesDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMatchesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMatchesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
