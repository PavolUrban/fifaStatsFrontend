import { Component, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from '../../../shared/services/general.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-all-time-team-stats',
  templateUrl: './all-time-team-stats.component.html',
  styleUrls: ['./all-time-team-stats.component.scss']
})
export class AllTimeTeamStatsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator : MatPaginator;
  @ViewChild(MatSort, { static: true }) sort : MatSort;

  displayedColumns: string[] = ['index','teamname','country','matches','wins','draws','losses','goalsScored','goalsConceded','goalDiff'];
  dataSource = new MatTableDataSource();

  checked = false;

  constructor(private generalService : GeneralService) { }

  ngOnInit() {
    this.generalService.getTeamStats().subscribe(data=>
    {
      this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(data)));
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }






  displayPercentage = true;

}
