import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teams } from '../teams';
import { TeamsService } from '../services/teams.service';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogConfig, MatDialog, MatTabChangeEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { Matches } from '../matches';
import { MatchDetailComponent } from '../match-detail/match-detail.component';


@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrls: ['./single-team.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SingleTeamComponent implements OnInit {

  team : Teams = new Teams();
  subtitle: string = "All European competitions"
  topGoalscorers;
  fullGoalscorersList;
ImgUrl = ' ';

top5GS;
teamMatches;




totalBilance = [];

fulldataCopy ;

  constructor(private activatedRoute: ActivatedRoute, private teamsService : TeamsService) {




  }


  sortAndSlice(competition){
    this.topGoalscorers = this.getSortedKeys(this.fulldataCopy["goalScorers"][competition]);

    let tmp = []

    this.topGoalscorers.forEach(element => {
      tmp.push({key: element, value: this.fulldataCopy["goalScorers"][competition][element]})
    });

    this.fullGoalscorersList = tmp;
    this.top5GS = this.fullGoalscorersList.slice(0, 6);
  }

   getSortedKeys(obj) {
    var keys = keys = Object.keys(obj);
    return keys.sort(function(a,b){return obj[b]-obj[a]});
  }


  tabChanged(tabChangeEvent: MatTabChangeEvent): void{

    if(tabChangeEvent.index == 0){
      this.subtitle = "All European competitions";
      this.sortAndSlice("Total");
    }
    else if(tabChangeEvent.index == 1){
      this.subtitle = "Champions league";
      this.sortAndSlice("CL");
    }
    else if(tabChangeEvent.index == 2){
      this.subtitle = "European league";
      this.sortAndSlice("EL");
    }

  }

  ngOnInit() {

    // this.activatedRoute.params.subscribe(params => {

    //   this.seasonName = params['seasonname'];
    //   this.competition = params['competition'];

    this.activatedRoute.params.subscribe(params => {
      console.log("params");
      console.log(params);
      this.team.teamName = params["teamName"];

      this.teamsService.getSingleTeamStats(this.team.teamName).subscribe(data =>
        {

          this.fulldataCopy = data;



          this.teamMatches = data["matches"];
          console.log("I am sending this");
          console.log(this.teamMatches);
          let matchStats = data["matchesStats"];
            this.team.winsCL = matchStats["CL"]["Wins"];
            this.team.drawsCL = matchStats["CL"]["Draws"];
            this.team.lossesCL = matchStats["CL"]["Losses"];

            this.team.winsEL = matchStats["EL"]["Wins"];
            this.team.drawsEL = matchStats["EL"]["Draws"];
            this.team.lossesEL = matchStats["EL"]["Losses"];

            this.team.winsTotal = this.team.winsCL + this.team.winsEL;
            this.team.drawsTotal = this.team.drawsCL + this.team.drawsEL;
            this.team.lossesTotal = this.team.lossesCL + this.team.lossesEL;

            this.team.matchesEL = this.team.winsEL+this.team.drawsEL + this.team.lossesEL;
            this.team.matchesCL = this.team.winsCL+this.team.drawsCL + this.team.lossesCL;
            this.team.matchesTotal = this.team.matchesEL + this.team.matchesCL;

            // this.totalBilance.push(this.team.winsTotal);
            // this.totalBilance.push(this.team.lossesTotal);
            // this.totalBilance.push(this.team.drawsTotal);
            this.totalBilance= [this.team.winsTotal, this.team.drawsTotal, this.team.lossesTotal];

            this.team.goalsConcededEL = matchStats["EL"]["GoalsConceded"];
            this.team.goalsScoredEL = matchStats["EL"]["GoalsScored"];

            this.team.goalsConcededCL = matchStats["CL"]["GoalsConceded"];
            this.team.goalsScoredCL = matchStats["CL"]["GoalsScored"];

            this.team.goalsConcededTotal = this.team.goalsConcededCL + this.team.goalsConcededEL;
            this.team.goalsScoredTotal =  this.team.goalsScoredCL + this.team.goalsScoredEL;

            this.team.goalDiffTotal = this.team.goalsScoredTotal  - this.team.goalsConcededTotal;
            this.team.goalDiffCL = this.team.goalsScoredCL - this.team.goalsConcededCL;
            this.team.goalDiffEL = this.team.goalsScoredEL - this.team.goalsConcededEL;


            this.team.seasonsCL = matchStats["CL"]["Seasons"];
            this.team.seasonsEL = matchStats["EL"]["Seasons"];
            this.team.seasonsTotal = this.team.seasonsCL + this.team.seasonsEL;
            //this.topGoalscorers = this.getSortedKeys(data["goalScorers"]["CL"]);

            this.sortAndSlice("Total");

          if(data['fm'])
            this.ImgUrl = 'data:image/gif;base64,'+data['fm']['pic'];

        });
    });

  }

}
