import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-team-top-goalscorers',
  templateUrl: './team-top-goalscorers.component.html',
  styleUrls: ['./team-top-goalscorers.component.scss']
})
export class TeamTopGoalscorersComponent implements OnInit, OnChanges {

  @Input() topGS;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('TOP GS CHANGE');
    console.log(this.topGS);
  }

  ngOnInit() {
    console.log(this.topGS);
  }
}
