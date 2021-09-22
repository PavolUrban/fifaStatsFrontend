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
  @Input() winnerTeam ;
  @Input() winnerPlayer ;
  imgSrc;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
   console.log(this.pavolJayWins + "changed");
  }

  ngOnInit() {
    console.log("winners "+ this.winnerPlayer + this.winnerTeam);
    this.imgSrc = "./assets/img/" + this.competition + "Trophy.png";

  }

}
