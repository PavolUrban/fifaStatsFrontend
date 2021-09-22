import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-top-goalscorers',
  templateUrl: './team-top-goalscorers.component.html',
  styleUrls: ['./team-top-goalscorers.component.scss']
})
export class TeamTopGoalscorersComponent implements OnInit {

  @Input() topGS;

  constructor() { }

  ngOnInit() {}
}
