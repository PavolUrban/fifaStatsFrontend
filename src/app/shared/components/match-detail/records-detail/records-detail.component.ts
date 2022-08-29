import { Component, Input, OnInit } from '@angular/core';
import { EventsInMatchModel } from 'src/app/shared/models/events-in-match.model';
import { Matches } from 'src/app/shared/models/matches';
import { NEW_FORMAT, OLD_FORMAT } from '../../../constants';


@Component({
  selector: 'app-records-detail',
  templateUrl: './records-detail.component.html',
  styleUrls: ['./records-detail.component.scss']
})
export class RecordsDetailComponent implements OnInit {

  @Input() title: string;
  @Input() events: Array<EventsInMatchModel>;
  @Input() match: Matches;
  @Input() typeOfFormat: string;

  oldFormat = OLD_FORMAT;
  newFormat = NEW_FORMAT;

  constructor() { }

  ngOnInit(): void {
  }

  
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
