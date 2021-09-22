import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Matches } from '../matches';
import { FileService } from '../services/file.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  match: Matches;
  goalscorersHome = [];
  goalscorersAway = [];
  yellowCardsHome = [];
  yellowCardsAway = [];
  redCardsHome = [];
  redCardsAway = [];


  constructor(private dialogRef: MatDialogRef<MatchDetailComponent>, @Inject(MAT_DIALOG_DATA) data, private fileService: FileService,
              private router: Router) {
    console.log(data);
    this.match = data['match'];


    this.getHomeAway(this.match.goalscorers,this.goalscorersHome, this.goalscorersAway);
    console.log("After formating");
    console.log(this.goalscorersHome);
    console.log(this.goalscorersAway);

  }

  getHomeAway(fullRecord: string, arrayToFillHome, arrayToFillAway)
  {
    let recordHomeAway = fullRecord.split('-');
    let recordHome = recordHomeAway[0];
    let recordAway = recordHomeAway[1];
    this.makeProperRecordForSingleTeam(recordHome, arrayToFillHome);
    this.makeProperRecordForSingleTeam(recordAway, arrayToFillAway);
  }

  makeProperRecordForSingleTeam(teamRecord: string, arrayToFill)
  {
    console.log("Idem na to , takto vyera array");
    arrayToFill;
    console.log(arrayToFill);
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

  homeTeamLogo;
  awayTeamLogo;

  ngOnInit() {
  this.subscription =  this.fileService.getMatchLogos(this.match.hometeam, this.match.awayteam).subscribe(data=>{
    console.log(data);
    this.homeTeamLogo = data[this.match.hometeam];
    this.awayTeamLogo = data[this.match.awayteam];
  });
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }


  goToTeamView(teamname)
  {
    // todo call service to get team info
    this.router.navigate(['/teaminfo/'+teamname]);
  }

}
