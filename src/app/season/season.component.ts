import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../services/general.service';
import { Subscription } from 'rxjs';
import { MatchesService } from '../services/matches.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { GroupMatchesDialogComponent } from '../group-matches-dialog/group-matches-dialog.component';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SeasonComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  seasonName : string = "";
  competition : string = "";
  displayStats : boolean = false;
  goalscorers: object = {};
  playersStats: object = {};
  allGroups : object = {};

  kotlikWinCount: number;
  pavolJayWinCount: number;
  drawsCount: number;
  goalsCount: number;
  matchesCount: number;
  playOffs;

  winnerPlayer;
  winnerTeam;
  winnerLogo;
  topGoalscorersGroupStage;
  topGoalscorersPlayOffs;
  topGoalscorersTotal;

  competitionName;
  constructor(private activatedRoute: ActivatedRoute, private generalService: GeneralService,private router: Router,
              private matchesService: MatchesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {

      this.seasonName = params['seasonname'];
      this.competition = params['competition'];

      if(this.competition === 'CL'){
        this.competitionName = 'Champions league';
      } else {
        this.competitionName = 'European league';
      }
  
      this.subscription = this.generalService.getGroupStage(this.seasonName,this.competition).subscribe(data=>{
        console.log("season dataa");
        console.log(data);
        this.allGroups = data["Tables"];
        this.matchesCount = data["MatchesCount"];
        this.goalsCount = data["GoalsCount"];
        this.playersStats = data["StatsByGroups"];
        this.playOffs = data["PlayOffs"];
        this.winnerPlayer =data["CLWinnerPlayer"];
        this.winnerLogo = data['WinnerTeamLogo']?.pic;

        if(data["Final"] == null)
         this.winnerTeam = "unknown";
        else
          this.winnerTeam= data["Final"]["winner"];

        this.calculatePlayerWinsInTotal(this.playersStats);

        this.goalscorers = data["Goalscorers"];
        this.topGoalscorersGroupStage = data["TotalGoalscorersGroupStage"];
        this.topGoalscorersPlayOffs = data["TotalGoalscorersPlayOffs"];
        this.topGoalscorersTotal = data["TotalGoalscorersAllPhases"];
      });

      // this.generalService.getPlayOff(this.seasonName, this.competition).subscribe(data=>
      //   {
      //     // console.log(data);
      //     //  console.log(window.innerWidth);
      //   });
   });

  }


  calculatePlayerWinsInTotal(playerStats){

    let kotlikWins = 0;
    let pavolJayWins = 0;
    let draws = 0;
    Object.keys(playerStats).forEach(function(key) {
      kotlikWins += playerStats[key]["Kotlik"];
      pavolJayWins += playerStats[key]["Pavol Jay"];
      draws += playerStats[key]["Draws"] //TODO mozno pouzivat D ak by padalo??
    });

    this.kotlikWinCount = kotlikWins;
    this.pavolJayWinCount = pavolJayWins;
    this.drawsCount = draws;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToTeamView(teamname)
  {
    // todo call service to get team info
    this.router.navigate(['/teaminfo/'+teamname]);
  }

  displayCurrentGroupMatches(competitionPhase: string)
  {
    this.subscription = this.matchesService.getCustomMatches(this.competition, this.seasonName, competitionPhase).subscribe(data=>{
     console.log(data);
     const dialogConfig = new MatDialogConfig();
     dialogConfig.autoFocus = true;

      dialogConfig.minWidth = '900px';
    dialogConfig.minHeight = '500px';
    dialogConfig.data = {
      matches: data
    };
     this.dialog.open(GroupMatchesDialogComponent, dialogConfig);
    });
  }

}
