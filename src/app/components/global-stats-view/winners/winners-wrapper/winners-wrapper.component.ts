import { Component, OnInit } from '@angular/core';
import { TeamTrophyModel } from 'src/app/shared/models/team-trophy.model';
import { GlobalStatsService } from 'src/app/shared/services/global-stats.service';

@Component({
  selector: 'app-winners-wrapper',
  templateUrl: './winners-wrapper.component.html',
  styleUrls: ['./winners-wrapper.component.scss']
})
export class WinnersWrapperComponent implements OnInit {

  // todo subscription + unsubscribe + winners list integrate here

  teamTrophiesList: Array<TeamTrophyModel>;
  constructor(private globalStatsService: GlobalStatsService) { }

  ngOnInit(): void {
    this.globalStatsService.getTrophyRoomTeams().subscribe(data=> {
      this.teamTrophiesList = data as Array<TeamTrophyModel>;
    })
  }

  

}
