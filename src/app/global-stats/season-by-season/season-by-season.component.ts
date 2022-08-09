import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OverallSeasonStats } from 'src/app/shared/models/overall-season-stats.model';
import { SeasonBySeasonService } from 'src/app/shared/services/seasonBySeason.service';

@Component({
  selector: 'app-season-by-season',
  templateUrl: './season-by-season.component.html',
  styleUrls: ['./season-by-season.component.scss']
})
export class SeasonBySeasonComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort : MatSort;

  displayedColumns: string[] = ['seasonName', 'matchesCount', 'goalsCount', 'avgGoalsPerMatch' , 'pavolJay', 'pavolJayAvg', 'draws', 'drawsAvg', 'kotlik', 'kotlikAvg'];
  dataSource = new MatTableDataSource();

  constructor(private seasonBySeasonService : SeasonBySeasonService) { }

  ngOnInit(): void {
    this.seasonBySeasonService.getSeasonBySeasonStats().subscribe(data=> {
      console.log(data['seasonBySeasonStats'] as Array<OverallSeasonStats>);
      this.dataSource = new MatTableDataSource(data['seasonBySeasonStats'] as Array<OverallSeasonStats>);
      this.dataSource.sort = this.sort;
    })
  }

}
