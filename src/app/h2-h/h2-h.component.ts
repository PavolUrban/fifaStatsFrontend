import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatchesService } from '../services/matches.service';
import { TeamsService } from '../services/teams.service';
import { Subscription, Observable } from 'rxjs';
import {FormControl, Validators} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-h2-h',
  templateUrl: './h2-h.component.html',
  styleUrls: ['./h2-h.component.scss']
})
export class H2HComponent implements OnInit {

  subscription: Subscription = new Subscription();
  teamNames;
  selectedFirst ="AC Milan";
  selectedSecond= "Liverpool FC";
  subtitle: string = this.selectedFirst + " vs " + this.selectedSecond;


  myControlFirstTeam = new FormControl();
  myControlSecondTeam = new FormControl();
  options: string[] = [];
  filteredOptionsFirstTeam: Observable<string[]>;
  filteredOptionsSecondTeam: Observable<string[]>;

  dataLoaded: boolean = false;

  constructor(private matchesService : MatchesService, private teamsService : TeamsService) { }

  ngOnInit() {
    this.subscription = this.teamsService.getTeamNames().subscribe(data=>
      {
        this.options = data as string[];

        this.filteredOptionsFirstTeam = this.myControlFirstTeam.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );


        this.filteredOptionsSecondTeam = this.myControlSecondTeam.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );


      });


  }


  bilancePlayers;
bilanceTeams;
currentBilanceUsed;
goalscorers;
logos;
allMatches;
  getH2HStats()
  {
    console.log(this.myControlFirstTeam.value);

    this.subscription = this.matchesService.getH2HStatistics(this.myControlFirstTeam.value, this.myControlSecondTeam.value).subscribe(data =>
      {
        this.subtitle = this.myControlFirstTeam.value + " vs " + this.myControlSecondTeam.value;
        // this.allMatches = [];
        this.allMatches = data["matches"];
        this.bilancePlayers = data["playersStats"];
        this.bilanceTeams = data["overallStats"];
        this.currentBilanceUsed = this.bilanceTeams;
        this.goalscorers = data["goalscorers"];
        this.logos = data["logos"];
        this.dataLoaded = true;
      });

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  tabChanged(tabChangeEvent: MatTabChangeEvent): void{

    if(tabChangeEvent.index == 0)
    {
      this.subtitle = this.myControlFirstTeam.value + " vs " + this.myControlSecondTeam.value;
      this.currentBilanceUsed = this.bilanceTeams;
    }

    else if(tabChangeEvent.index == 1)
    {
      this.subtitle = "Pavol Jay vs Kotlik";
      this.currentBilanceUsed = this.bilancePlayers;
    }

}

}
