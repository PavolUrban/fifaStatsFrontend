import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordCellComponent } from './record-cell.component';

describe('RecordCellComponent', () => {
  let component: RecordCellComponent;
  let fixture: ComponentFixture<RecordCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
