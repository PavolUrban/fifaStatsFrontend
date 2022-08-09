import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FifaPlayerService } from '../shared/services/fifaPlayer.service';

@Component({
  selector: 'app-player-teams-dialog',
  templateUrl: './player-teams-dialog.component.html',
  styleUrls: ['./player-teams-dialog.component.scss']
})
export class PlayerTeamsDialogComponent implements OnInit {

  playerInfo;
  playerTeams;

  playerName;

  imgSrc;

  statsPerSeason;
  constructor(private dialogRef: MatDialogRef<PlayerTeamsDialogComponent>, @Inject(MAT_DIALOG_DATA) data, private fifaPlayerService: FifaPlayerService, private router: Router) {


      this.playerInfo = data['player'];
      
      if(this.playerInfo){
        this.playerName = this.playerInfo['name'];
        this.playerTeams = data['player']['goalsByTeams'];
        this.imgSrc = "./assets/img/" + this.playerName+ ".jpg";
      } else{
        console.log(data)
        this.playerName = data['name']
      }
      
    fifaPlayerService.getAllPlayerStats(this.playerName).subscribe(data=>{
      this.statsPerSeason = data['playerStatsPerSeason'];
      console.log("toto su stats pre playera");
      console.log(this.statsPerSeason);
    })

    // TODO Finish this asap
    // fifaPlayerService.generateFifaPlayerImproved().subscribe();
    // console.log("called");
  }

  ngOnInit() {
  }

  goToTeamView(teamname: string){
    this.router.navigate(['/teaminfo/'+teamname]) .then(() => {
      window.location.reload();
    });
  }

}
