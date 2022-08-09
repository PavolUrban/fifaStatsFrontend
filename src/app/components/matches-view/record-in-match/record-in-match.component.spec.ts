import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordInMatchComponent } from './record-in-match.component';

describe('RecordInMatchComponent', () => {
  let component: RecordInMatchComponent;
  let fixture: ComponentFixture<RecordInMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordInMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordInMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
