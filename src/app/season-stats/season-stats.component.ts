import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-season-stats',
  templateUrl: './season-stats.component.html',
  styleUrls: ['./season-stats.component.scss']
})
export class SeasonStatsComponent implements OnInit, OnChanges {

  @Input() pavolJayWins;
  @Input() draws;
  @Input() kotlikWins;
  @Input() matches;
  @Input() goals;
  @Input() competition;
  @Input() winnerTeam: string ;
  @Input() winnerPlayer ;
  @Input() winnerLogo ;
  imgSrc;

  winnerUnknown = true;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.winnerTeam){
      if(this.winnerTeam.localeCompare('unknown') === 0){
        this.winnerUnknown = true;
      } else {
        this.winnerUnknown = false;
      }
  }
 
  
  }

  ngOnInit() {
    this.imgSrc = "./assets/img/" + this.competition + "Trophy.png";
  }

}
