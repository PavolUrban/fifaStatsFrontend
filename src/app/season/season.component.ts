import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../services/general.service';
import { Subscription } from 'rxjs';
import { MatchesService } from '../services/matches.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { GroupMatchesDialogComponent } from '../group-matches-dialog/group-matches-dialog.component';
import { OverallSeasonStats } from '../models/overall-season-stats.model';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss'],
})
export class SeasonComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  seasonName: string = "";
  competition: string = "";
  competitionName: string;
  overallStats: OverallSeasonStats;

  goalscorersPerGroup: object = {};
  playersStats: object = {};
  allGroups: object = {};

  topGoalscorersGroupStage;
  topGoalscorersPlayOffs;
  topGoalscorersTotal;
  playOffs;

  constructor(private activatedRoute: ActivatedRoute, private generalService: GeneralService, private router: Router,
    private matchesService: MatchesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.topGoalscorersGroupStage = null;
      this.topGoalscorersPlayOffs = null;
      this.topGoalscorersTotal = null;
      this.seasonName = params['seasonname'];
      this.competition = params['competition'];

      // todo toto nejak zjednodusit
      if (this.competition === 'CL') {
        this.competitionName = 'Champions league';
      } else {
        this.competitionName = 'European league';
      }

      // todo toto zjednotit
      this.subscription = this.generalService.getSeason(this.seasonName, this.competition).subscribe(data => {
        console.log("season dataa");
        console.log(data);
        this.overallStats = data["overallStats"];
        this.allGroups = data["Tables"];
        this.playersStats = data["StatsByGroups"];
        this.playOffs = data["PlayOffs"];
        this.goalscorersPerGroup = data["GoalscorersPerGroup"];
        this.topGoalscorersGroupStage = data["TotalGoalscorersGroupStage"];
        this.topGoalscorersPlayOffs = data["TotalGoalscorersPlayOffs"];
        this.topGoalscorersTotal = data["TotalGoalscorersAllPhases"];
      });
    });

  }

  ngOnDestroy() {
    console.log('destroy called');
    this.subscription.unsubscribe();
  }

  goToTeamView(teamname) {
    // todo call service to get team info
    this.router.navigate(['/teaminfo/' + teamname]);
  }

  displayCurrentGroupMatches(competitionPhase: string) {
    this.subscription = this.matchesService.getCustomMatches(this.competition, this.seasonName, competitionPhase).subscribe(data => {
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
