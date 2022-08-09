import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMatchWrapperComponent } from './create-match-wrapper.component';

describe('CreateMatchWrapperComponent', () => {
  let component: CreateMatchWrapperComponent;
  let fixture: ComponentFixture<CreateMatchWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMatchWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMatchWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
