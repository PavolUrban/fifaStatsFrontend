import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ALL, CHAMPIONS_LEAGUE, EUROPEAN_LEAGUE } from 'src/app/shared/constants';
import { FifaPlayerWithRecordModel } from 'src/app/shared/models/fifa-player-with-record.model';
import { Matches } from 'src/app/shared/models/matches';
import { DialogOpenerService } from 'src/app/shared/services/dialog-opener.service';
import { FifaPlayerService } from 'src/app/shared/services/fifaPlayer.service';
import { GeneralRouterService } from 'src/app/shared/services/general-router.service';
import { MatchesService } from 'src/app/shared/services/matches.service';

@Component({
  selector: 'app-top-fifa-players',
  templateUrl: './top-fifa-players.component.html',
  styleUrls: ['./top-fifa-players.component.scss']
})
export class TopFifaPlayersComponent implements OnInit {

  mostGoalsInSingleMatch = 'Most goals in single game';
  mostGoalsInSeason = 'Most goals in the season';
  recordTypesList = [this.mostGoalsInSingleMatch, this.mostGoalsInSeason];
  selectedRecordType = this.mostGoalsInSingleMatch;

  competitionList = [CHAMPIONS_LEAGUE, EUROPEAN_LEAGUE, ALL];
  selectedCompetition = ALL;

  groupStage = 'Group stage';
  playOffs = 'Play offs';
  competitionPhaseList = [this.groupStage, this.playOffs, ALL];
  selectedPhase = ALL;
  competitionPhaseSelectionDisabled = true;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  dataSource: MatTableDataSource<FifaPlayerWithRecordModel>;
  displayedColumns: string[] = ['index', 'playerName', 'recordEventCount','season', 'homeTeam', 'score', 'awayTeam', 'actions'];

  constructor(private fifaPlayerService: FifaPlayerService, public generalRouterService: GeneralRouterService, public dialogOpenerService: DialogOpenerService, private matchesService: MatchesService) { }

  ngOnInit(): void {
    this.updatePlayersWithRecords();
  }

  updatePlayersWithRecords(){
    console.log(this.selectedRecordType + " is used");
    this.fifaPlayerService.getPlayersWithRecords(this.selectedRecordType, this.selectedCompetition, this.selectedPhase).subscribe(data=> {
      console.log(data);
      if(this.selectedRecordType === this.mostGoalsInSingleMatch){
        this.competitionPhaseSelectionDisabled = true;
      } else {
        this.competitionPhaseSelectionDisabled = false;
      }
      this.dataSource = new MatTableDataSource<FifaPlayerWithRecordModel>(data as Array<FifaPlayerWithRecordModel>);
      this.dataSource.paginator = this.paginator;
    })
  }

  getMatchToOpen(element: FifaPlayerWithRecordModel){
    this.matchesService.getMatchById(element.matchId).subscribe(data=> {
      this.dialogOpenerService.openMatchDetail(data as Matches);
    })
   
  }

}
