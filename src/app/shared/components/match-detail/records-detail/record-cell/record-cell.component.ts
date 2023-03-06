import { Component, Input } from '@angular/core';
import { NEW_FORMAT, OLD_FORMAT } from 'src/app/shared/constants';
import { EventsInMatchModel } from 'src/app/shared/models/events-in-match.model';

@Component({
  selector: 'app-record-cell',
  templateUrl: './record-cell.component.html',
  styleUrls: ['./record-cell.component.scss']
})
export class RecordCellComponent {

  @Input() event: EventsInMatchModel;
  @Input() typeOfFormat: string;

  oldFormat = OLD_FORMAT;
  newFormat = NEW_FORMAT;

  constructor() { }
    
}
