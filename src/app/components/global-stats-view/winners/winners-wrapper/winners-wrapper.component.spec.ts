import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersWrapperComponent } from './winners-wrapper.component';

describe('WinnersWrapperComponent', () => {
  let component: WinnersWrapperComponent;
  let fixture: ComponentFixture<WinnersWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnersWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
