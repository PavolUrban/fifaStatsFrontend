import { Component, OnInit, ViewChild } from '@angular/core';
import { Matches } from 'src/app/shared/models/matches';
import { TeamTrophyModel } from 'src/app/shared/models/team-trophy.model';
import { GlobalStatsService } from 'src/app/shared/services/global-stats.service';

@Component({
  selector: 'app-winners-list',
  templateUrl: './winners-list.component.html',
  styleUrls: ['./winners-list.component.scss']
})
export class WinnersListComponent implements OnInit {

  @ViewChild('tabGroup') tabGroup;
  dataToPass: Array<Matches>;
  teamTrophiesList: Array<TeamTrophyModel>;

  constructor(private globalStatsService: GlobalStatsService) { }

  ngOnInit(): void {
    this.reloadData('CL');
  }

  reloadData(competition: string): void {
    this.globalStatsService.getWinnersList(competition).subscribe( data =>{
      this.dataToPass = data as Array<Matches>;
    });
  }

  tabChanged(): void {
    let competition = this.getCompetitionName();
    this.reloadData(competition);
  }

  getCompetitionName(): string {
    let competitionName: string;
    if(this.tabGroup.selectedIndex === 0){
      competitionName = "CL";
    } else {
      competitionName = "EL";
    }
    
    return competitionName;
  }
}
