import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFifaPlayersComponent } from './top-fifa-players.component';

describe('TopFifaPlayersComponent', () => {
  let component: TopFifaPlayersComponent;
  let fixture: ComponentFixture<TopFifaPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFifaPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFifaPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
