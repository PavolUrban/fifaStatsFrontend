import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { Matches } from 'src/app/shared/models/matches';
import { DataToCreateMatchModel } from 'src/app/shared/models/matches/data-to-create-match.model';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {
  match: Matches;
  dataToCreateMatch: DataToCreateMatchModel;
  cardTitle = 'Create new match';
  localStorageKeyCompetition = 'lastSelectedCompetition';
  localStorageKeyCompetitionPhase = 'lastSelectedCompetitionPhase';
  localStorageKeySeason = 'lastSelectedSeason';

  homeTeamControl = new FormControl();
  awayTeamControl = new FormControl();
  filteredOptionsHomeTeam: Observable<string[]>;
  filteredOptionsAwayTeam: Observable<string[]>;

  constructor(private dialogRef: MatDialogRef<CreateMatchComponent>, @Inject(MAT_DIALOG_DATA) dialogData) {
    this.dataToCreateMatch = dialogData.dataToCreateMatch;
    this.match = dialogData.match;

    if (this.match.id) {
        this.homeTeamControl = new FormControl(this.match.homeTeam);
        this.awayTeamControl = new FormControl(this.match.awayTeam);
        this.cardTitle = 'Existing match update';
    }
  }

  ngOnInit() {
    this.filteredOptionsHomeTeam = this.homeTeamControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.dataToCreateMatch.teamNames))
    );

    this.filteredOptionsAwayTeam = this.awayTeamControl.valueChanges.pipe(
      startWith(''),
      map(value2 => this._filter(value2, this.dataToCreateMatch.teamNames))
    );
  }

  private _filter(value: string, options): string[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }

  saveMatch() {
    this.match.homeTeam = this.homeTeamControl.value;
    this.match.awayTeam = this.awayTeamControl.value;
    this.dialogRef.close(this.match);
  }


  updateOtherPlayerControl(event, player: string): void {
    const otherPlayer = this.dataToCreateMatch.playerNamesList.find(player => player !== event.value);

    if (player === 'homePlayer') {
      this.match.playerA = otherPlayer;
    } else {
      this.match.playerH = otherPlayer;
    }
  }

  updateLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}