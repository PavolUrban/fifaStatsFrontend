import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teams } from '../../../shared/models/teams';
import { TeamsService } from '../../../shared/services/teams.service';



@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrls: ['./single-team.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SingleTeamComponent implements OnInit {

  team: Teams = new Teams();
  subtitle: string = "All European competitions"
  teamMatches;
  totalBilance = [];
  goalsByMins;
  goalsInRange;
  championsLeagueFinalMatches;
  europeanLeagueFinalMatches;
  totalFinalMatches;
  trophyRoomData = new Object();
  teamWithoutTrophy = false;
  unknownTimeGoals: number;
  unknownTimeConcededGoals: number;


  constructor(private activatedRoute: ActivatedRoute, private teamsService: TeamsService) { }


  ngOnInit() {
    
    this.activatedRoute.params.subscribe(params => {
      this.team.teamName = params["teamName"];
      this.teamsService.getSingleTeamStats(this.team.teamName).subscribe(data => {
        //todo titles count should be adjusted
        this.championsLeagueFinalMatches = data['finalMatches']['CL'];
        this.europeanLeagueFinalMatches = data['finalMatches']['EL'];
        this.totalFinalMatches = data['finalMatches']['Total'];
        this.trophyRoomData['titlesCountCL'] = data['finalMatches']['CL']['Won'].length;
        this.trophyRoomData['titlesCountEL'] = data['finalMatches']['EL']['Won'].length;


        if (this.trophyRoomData['titlesCountCL'] + this.trophyRoomData['titlesCountEL'] === 0) {
          this.teamWithoutTrophy = true;
        }

        this.goalsByMins = data["goalsByMinutesCount"]; // todo this can be soon removed
        this.goalsInRange = data["goalsPerTimeRanges"];
        this.unknownTimeGoals = data['unknownTimeGoals'];
        this.unknownTimeConcededGoals = data['unknownConcededGoalsTime'];
        this.teamMatches = data["matches"];
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

        this.team.matchesEL = this.team.winsEL + this.team.drawsEL + this.team.lossesEL;
        this.team.matchesCL = this.team.winsCL + this.team.drawsCL + this.team.lossesCL;
        this.team.matchesTotal = this.team.matchesEL + this.team.matchesCL;

        this.totalBilance = [this.team.winsTotal, this.team.drawsTotal, this.team.lossesTotal];

        this.team.goalsConcededEL = matchStats["EL"]["GoalsConceded"];
        this.team.goalsScoredEL = matchStats["EL"]["GoalsScored"];

        this.team.goalsConcededCL = matchStats["CL"]["GoalsConceded"];
        this.team.goalsScoredCL = matchStats["CL"]["GoalsScored"];

        this.team.goalsConcededTotal = this.team.goalsConcededCL + this.team.goalsConcededEL;
        this.team.goalsScoredTotal = this.team.goalsScoredCL + this.team.goalsScoredEL;

        this.team.goalDiffTotal = this.team.goalsScoredTotal - this.team.goalsConcededTotal;
        this.team.goalDiffCL = this.team.goalsScoredCL - this.team.goalsConcededCL;
        this.team.goalDiffEL = this.team.goalsScoredEL - this.team.goalsConcededEL;

        this.team.seasonsCL = matchStats["CL"]["Seasons"];
        this.team.seasonsEL = matchStats["EL"]["Seasons"];
        this.team.seasonsTotal = this.team.seasonsCL + this.team.seasonsEL;
      });
    });

  }


  //todo this is duplicate!
  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
