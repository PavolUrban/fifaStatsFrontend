import { Component, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-all-time-team-stats',
  templateUrl: './all-time-team-stats.component.html',
  styleUrls: ['./all-time-team-stats.component.scss']
})
export class AllTimeTeamStatsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  displayedColumns: string[] = ['index','teamname','country','matches','wins','draws','losses','goalsScored','goalsConceded','goalDiff'];
  dataSource = new MatTableDataSource();

  checked = false;

  constructor(private generalService : GeneralService) { }

  ngOnInit() {
    this.generalService.getTeamStats().subscribe(data=>
    {
      console.log(data);
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
