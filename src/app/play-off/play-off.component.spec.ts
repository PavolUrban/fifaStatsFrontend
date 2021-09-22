import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayOffComponent } from './play-off.component';

describe('PlayOffComponent', () => {
  let component: PlayOffComponent;
  let fixture: ComponentFixture<PlayOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
