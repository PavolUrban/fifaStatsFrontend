import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { Matches } from 'src/app/matches';
import { MatchesService } from 'src/app/shared/services/matches.service';
import { TeamsService } from 'src/app/shared/services/teams.service';


@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {

  subscription: Subscription = new Subscription();
  homeTeamControl = new FormControl();
  awayTeamControl = new FormControl();
  teamsList: string[] = [];
  filteredOptionsHomeTeam: Observable<string[]>;
  filteredOptionsAwayTeam: Observable<string[]>;
  scoreHome: number;
  scoreAway: number;
  homePlayersControl = new FormControl();
  awayPlayersControl = new FormControl();
  playersHome: string [];
  playersAway: string [];
  seasonsList: string[];
  selectedSeason: string;
  competitionsList: string[];
  selectedCompetition = 'CL'; //default
  competitionsPhases = new Map([["CL", []], ["EL",[]]]);
  competitionPhase = 'GROUP A'; // default
  match: Matches = new Matches();
  id: number;
  dialogData;
  cardTitle = 'Create new match';

  allDataPrepared = false;

  localStorageKeyCompetition = 'lastSelectedCompetition';
  localStorageKeyCompetitionPhase = 'lastSelectedCompetitionPhase';
  localStorageKeySeason = 'lastSelectedSeason';
 
  
  constructor( private teamsService: TeamsService, private matchesService: MatchesService, private dialogRef: MatDialogRef<CreateMatchComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData){
    this.dialogData = dialogData;
  }

  ngOnInit() {
    this.subscription = this.teamsService.getTeamNames().subscribe(data => {
        this.teamsList = data as string[];
  
        this.filteredOptionsHomeTeam = this.homeTeamControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value, this.teamsList))
        );
    
        this.filteredOptionsAwayTeam = this.awayTeamControl.valueChanges.pipe(
          startWith(''),
          map(value2 => this._filter(value2, this.teamsList))
        );
      });

      this.subscription = this.matchesService.getDataToCreateMatch().subscribe(data => {
        this.seasonsList = data['seasonsList'];
        this.playersHome = data['playerNamesList'];
        this.playersAway = data['playerNamesList'];
        this.competitionsList = data['competitionsList'];
        this.competitionsPhases.set('CL', data['competitionsPhasesCL']);
        this.competitionsPhases.set('EL', data['competitionsPhasesEL']);
        
        this.selectedCompetition = this.checkLocalStorageOrSetDefault(this.localStorageKeyCompetition, 'CL');
        this.competitionPhase = this.checkLocalStorageOrSetDefault(this.localStorageKeyCompetitionPhase, 'GROUP A');
        this.selectedSeason = this.checkLocalStorageOrSetDefault(this.localStorageKeySeason, this.seasonsList[this.seasonsList.length - 1])
        if(this.dialogData) {
          this.checkIfMatchIsToUpdate();
        } else {
          this.allDataPrepared = true;
        }
      });


      
  }

  checkLocalStorageOrSetDefault (localStorageKey: string, defaultValue): string {
    if (localStorage.getItem(localStorageKey)) {
      return localStorage.getItem(localStorageKey);
    } else {
      return defaultValue;
    }
  }

  private _filter(value: string, options): string[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }

  saveMatch() {
    this.match.hometeam = this.homeTeamControl.value;
    this.match.awayteam = this.awayTeamControl.value;
    this.match.scorehome = this.scoreHome;
    this.match.scoreaway = this.scoreAway;
    this.match.playerH = this.homePlayersControl.value;
    this.match.playerA = this.awayPlayersControl.value;
    this.match.season = this.selectedSeason;
    this.match.competition = this.selectedCompetition;
    this.match.competitionPhase = this.competitionPhase;

    if(this.dialogData){
      this.match.id = this.id;
      this.matchesService.updateMatch(this.match).subscribe();
    } else {
      this.matchesService.createMatch(this.match).subscribe();
    }

    this.dialogRef.close(true);
  }


  checkIfMatchIsToUpdate() {
    this.cardTitle = "Update match";
    let matchToUpdate: Matches = this.dialogData.match;
    this.homeTeamControl.setValue(matchToUpdate.hometeam);
    this.awayTeamControl.setValue(matchToUpdate.awayteam);
    this.scoreHome = matchToUpdate.scorehome;
    this.scoreAway = matchToUpdate.scoreaway;
    this.homePlayersControl.setValue(matchToUpdate.playerH);
    this.awayPlayersControl.setValue(matchToUpdate.playerA);
    this.selectedSeason = matchToUpdate.season;
    this.selectedCompetition = matchToUpdate.competition;
    this.competitionPhase = matchToUpdate.competitionPhase;
    this.id = matchToUpdate.id;
  }

  playerChanged(event, player: string): void {
    let value = event.value;
    let opositeValue: string;

    // note players home and away contain the same values so it doesn't matter which one we iterate
    this.playersHome.forEach(element => {
      if(element !== value){
        opositeValue = element;
      }
    });

    if(player==='homePlayer'){
      this.awayPlayersControl.setValue(opositeValue);
    } else {
      this.homePlayersControl.setValue(opositeValue);
    }
  }

  resetCompetitionPhaseAndUpdateLocalStorage(keyForLocalStorage: string){
    this.updateLocalStorage(keyForLocalStorage, this.selectedCompetition);
    this.competitionPhase = 'GROUP A';   // reset to default
  }

  updateLocalStorage(key: string, value: string){
    localStorage.setItem(key, value);
  }
}