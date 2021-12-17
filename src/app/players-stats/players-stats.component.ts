
import { Component, OnInit } from '@angular/core';
import { PlayerStatsService } from '../services/player-stats.service';

@Component({
  selector: 'app-players-stats',
  templateUrl: './players-stats.component.html',
  styleUrls: ['./players-stats.component.scss']
})
export class PlayersStatsComponent implements OnInit {

  constructor(private playerStatsService : PlayerStatsService) { }

  playersStats;

  numberOfMatches;
  goalsTotal;
  ngOnInit() {

    this.playerStatsService.getGlobalPlayersStats().subscribe(data=>
      {
        this.playersStats = data;
        // this.imgSrc = "./assets/img/" + name+ ".jpg";
        this.numberOfMatches = this.playersStats['Pavol Jay']['wins'] + this.playersStats['Pavol Jay']['draws'] + this.playersStats['Pavol Jay']['losses'];
        this.goalsTotal = this.playersStats['Pavol Jay']['goalsScored'] + this.playersStats['Pavol Jay']['goalsConceded'];
      }
      );
  }

}
