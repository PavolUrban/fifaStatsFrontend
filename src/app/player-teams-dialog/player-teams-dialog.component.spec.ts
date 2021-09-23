import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlayerTeamsDialogComponent } from './player-teams-dialog.component';

describe('PlayerTeamsDialogComponent', () => {
  let component: PlayerTeamsDialogComponent;
  let fixture: ComponentFixture<PlayerTeamsDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerTeamsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTeamsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
