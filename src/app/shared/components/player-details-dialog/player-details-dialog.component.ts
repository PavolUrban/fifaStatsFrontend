import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FifaPlayerStatsPerSeasonWrapperModel } from '../../models/fifa-player/fifa-player-stats-per-season-wrapper.model';
import { FifaPlayerService } from '../../services/fifa-player.service';
import { GeneralRouterService } from '../../services/general-router.service';

@Component({
  selector: 'app-player-teams-dialog',
  templateUrl: './player-details-dialog.component.html',
  styleUrls: ['./player-details-dialog.component.scss']
})
export class PlayerDetailsDialogComponent {

  playerStats: FifaPlayerStatsPerSeasonWrapperModel;

  constructor(@Inject(MAT_DIALOG_DATA) data, private readonly fifaPlayerService: FifaPlayerService, public generalRouterService: GeneralRouterService) {
    fifaPlayerService.getStatsForPlayer(data.playerId).subscribe(data => {
      this.playerStats = data;
    })
  }
}
