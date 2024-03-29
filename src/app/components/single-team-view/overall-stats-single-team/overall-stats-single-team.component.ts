import { Component, Input, OnInit } from '@angular/core';
import { SingleTeamModel } from 'src/app/shared/models/single-team.model';

@Component({
  selector: 'app-overall-stats-single-team',
  templateUrl: './overall-stats-single-team.component.html',
  styleUrls: ['./overall-stats-single-team.component.scss']
})
export class OverallStatsSingleTeamComponent implements OnInit {

  // todo posielat len data ktore potrebujem
  // todo bilanciu ukazovat len v charte
  @Input()  teamStats: SingleTeamModel;
  
  constructor() { }

  ngOnInit(): void {
  }

}
