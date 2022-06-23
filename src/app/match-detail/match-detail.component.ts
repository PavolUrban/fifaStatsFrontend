import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Matches } from '../matches';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent {

  match: Matches;
  goalscorersHome = [];
  goalscorersAway = [];
  yellowCardsHome = [];
  yellowCardsAway = [];
  redCardsHome = [];
  redCardsAway = [];


  constructor(@Inject(MAT_DIALOG_DATA) data,
              private router: Router, private matchesService: MatchesService) {
    this.match = data['match'];
    console.log("detail");
    console.log(this.match);

    this.matchesService.getMatchDetailsNew(this.match.id, this.match.hometeam, this.match.awayteam).subscribe(data=>{
      console.log(data);
    })
    this.getHomeAway(this.match.goalscorers,this.goalscorersHome, this.goalscorersAway);
    this.getHomeAway(this.match.yellowcards, this.yellowCardsHome, this.yellowCardsAway);
    this.getHomeAway(this.match.redcards, this.redCardsHome, this.redCardsAway);
  }

  getHomeAway(fullRecord: string, arrayToFillHome, arrayToFillAway)
  {
    if(fullRecord !== null) {
      let recordHomeAway = fullRecord.split('-');
      let recordHome = recordHomeAway[0];
      let recordAway = recordHomeAway[1];
      this.makeProperRecordForSingleTeam(recordHome, arrayToFillHome);
      this.makeProperRecordForSingleTeam(recordAway, arrayToFillAway);
    }
  }

  makeProperRecordForSingleTeam(teamRecord: string, arrayToFill)
  {
    arrayToFill;
    if(teamRecord.includes(";")) // team has multiple players in current section
    {
      let playerNames = teamRecord.split(";");

      for(let player of playerNames)
      {
        arrayToFill.push(player);
      }
    }

    else //team has only one player in this section
      arrayToFill.push(teamRecord);
  }


  goToTeamView(teamname)
  {
    // todo call service to get team info
    this.router.navigate(['/teaminfo/'+teamname]);
  }

}
