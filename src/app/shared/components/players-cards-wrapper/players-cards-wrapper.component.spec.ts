import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersCardsWrapperComponent } from './players-cards-wrapper.component';

describe('PlayersCardsWrapperComponent', () => {
  let component: PlayersCardsWrapperComponent;
  let fixture: ComponentFixture<PlayersCardsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersCardsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersCardsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
