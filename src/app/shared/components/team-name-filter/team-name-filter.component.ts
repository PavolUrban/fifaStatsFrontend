import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-team-name-filter',
  templateUrl: './team-name-filter.component.html',
  styleUrls: ['./team-name-filter.component.scss']
})
export class TeamNameFilterComponent implements OnInit {
  homeTeamControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
    
  }

  // todo emit value to createMatch (or other component) and call endpoint with string e.g. 'Tot' - do not fetch all values at app start
}
