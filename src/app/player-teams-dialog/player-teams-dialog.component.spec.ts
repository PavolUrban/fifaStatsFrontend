import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTeamsDialogComponent } from './player-teams-dialog.component';

describe('PlayerTeamsDialogComponent', () => {
  let component: PlayerTeamsDialogComponent;
  let fixture: ComponentFixture<PlayerTeamsDialogComponent>;

  beforeEach(async(() => {
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
