import { Component, Inject, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { Matches } from '../matches';
import { FifaPlayerService } from '../shared/services/fifaPlayer.service';

@Component({
  selector: 'app-record-in-match',
  templateUrl: './record-in-match.component.html',
  styleUrls: ['./record-in-match.component.scss']
})
export class RecordInMatchComponent implements OnInit {
// toto mozno zmazat

  match: Matches;
  homeTeamControl = new FormControl();
  filteredOptionsHomeTeam: Observable<string[]>;

  playersList: string[] = [];;
  recordTypes = ['G', 'YC', 'RC'];
  signatureType: string = 'minutes';
  selectedRecordType: string = 'G';
  details: string;
  teamName: string;
  teamNames: string [];


  playerList: string [];
  constructor(private playerService: FifaPlayerService, @Inject(MAT_DIALOG_DATA) data, private dialogRef: MatDialogRef<RecordInMatchComponent>) {
    this.match = data['match'];
    this.teamNames = [this.match.hometeam, this.match.awayteam];
  }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(data=> {
      this.playerList = data as string[];
  
      this.filteredOptionsHomeTeam = this.homeTeamControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value, this.playerList))
      );

    })


  }

  private _filter(value: string, options): string[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }

  saveRecord(){
    this.playerService.savePlayerStat(this.homeTeamControl.value, this.selectedRecordType, this.signatureType, this.details, this.teamName, this.match.id).subscribe();
    //this.dialogRef.close();
  }
}
