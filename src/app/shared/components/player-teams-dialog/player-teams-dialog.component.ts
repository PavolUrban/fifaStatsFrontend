import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FifaPlayerStatsPerSeasonModel } from '../../models/fifa-player-stats-per-season.model';
import { FifaPlayerService } from '../../services/fifaPlayer.service';
import { GeneralRouterService } from '../../services/general-router.service';

@Component({
  selector: 'app-player-teams-dialog',
  templateUrl: './player-teams-dialog.component.html',
  styleUrls: ['./player-teams-dialog.component.scss']
})
export class PlayerTeamsDialogComponent implements OnInit {

  playerName: string;
  imgSrc: string;
  statsPerSeason: Array<FifaPlayerStatsPerSeasonModel>;

  constructor(@Inject(MAT_DIALOG_DATA) data, private readonly fifaPlayerService: FifaPlayerService, public generalRouterService: GeneralRouterService) {
    this.playerName = data['name'];
    this.imgSrc = "./assets/img/" + this.playerName + ".jpg"
    
    fifaPlayerService.getAllPlayerStats(this.playerName).subscribe(data => {
      this.statsPerSeason = data['playerStatsPerSeason'];
    })
  }

  ngOnInit() {
  }

}
