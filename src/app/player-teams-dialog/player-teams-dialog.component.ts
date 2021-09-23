import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-player-teams-dialog',
  templateUrl: './player-teams-dialog.component.html',
  styleUrls: ['./player-teams-dialog.component.scss']
})
export class PlayerTeamsDialogComponent implements OnInit {

  playerInfo;
  playerTeams;

  imgSrc;
  constructor(private dialogRef: MatDialogRef<PlayerTeamsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {


    this.playerInfo = data['player'];

    let name = this.playerInfo['name'];
    this.playerTeams = data['player']['goalsByTeams'];
    this.imgSrc = "./assets/img/" + name+ ".jpg";


    console.log(this.playerInfo)
  }

  ngOnInit() {
  }

}
