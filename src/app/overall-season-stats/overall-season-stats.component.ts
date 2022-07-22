import { Component, Input, OnInit} from '@angular/core';
import { OverallSeasonStats } from '../overall-season-stats.model';

@Component({
  selector: 'app-overall-season-stats',
  templateUrl: './overall-season-stats.component.html',
  styleUrls: ['./overall-season-stats.component.scss']
})
export class OverallSeasonStatsComponent implements OnInit{

  @Input() stats: OverallSeasonStats;
  @Input() competition: string;

  constructor() {}

  ngOnInit(): void {
    console.log("toto mi prislo");
    console.log(this.stats);
  }
}
