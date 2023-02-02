import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TeamTrophyModel } from 'src/app/shared/models/team-trophy.model';
import { GeneralRouterService } from 'src/app/shared/services/general-router.service';

@Component({
  selector: 'app-team-trophies',
  templateUrl: './team-trophies.component.html',
  styleUrls: ['./team-trophies.component.scss']
})
export class TeamTrophiesComponent implements OnInit {
    
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort : MatSort;


  dataSource: MatTableDataSource<TeamTrophyModel> ;
  displayedColumns: string[] = ['index', 'teamName','winCountTotal', 'winCountCL', 'winCountEL', 'runnersUpTotal', 'runnersUpCL', 'runnersUpEL'];
  
  @Input() set data(teamTrophyList: TeamTrophyModel[]) {
    console.log(teamTrophyList);
    this.dataSource = new MatTableDataSource<TeamTrophyModel>(teamTrophyList)
  };

  constructor(public generalRouterService: GeneralRouterService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
