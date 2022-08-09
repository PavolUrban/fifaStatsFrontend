import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateGroupStageComponent } from './generate-group-stage.component';

describe('GenerateGroupStageComponent', () => {
  let component: GenerateGroupStageComponent;
  let fixture: ComponentFixture<GenerateGroupStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateGroupStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateGroupStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
