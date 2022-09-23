import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GoalscorersModel } from '../../models/goalscorers.model';
import { DialogOpenerService } from '../../services/dialog-opener.service';
import { GeneralRouterService } from '../../services/general-router.service';

@Component({
  selector: 'app-goalscorers-the-newest-one',
  templateUrl: './goalscorers-the-newest-one.component.html',
  styleUrls: ['./goalscorers-the-newest-one.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GoalscorersTheNewestOneComponent {

  @Input() pageSize = 15;
  @Input() displayNumberOfTeamsPlayerScored = false;

  dataSource: MatTableDataSource<GoalscorersModel>;
  displayedColumns: string[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input() set data(goalscorers: GoalscorersModel[]) {
    this.dataSource = new MatTableDataSource<GoalscorersModel>(goalscorers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    if (this.displayNumberOfTeamsPlayerScored) {
      this.displayedColumns = ['index', 'name', 'totalGoalsCount', 'numberOfTeamsPlayerScoredFor'];
    } else {
      this.displayedColumns = ['index', 'name', 'totalGoalsCount'];
    }

    this.dataSource.filterPredicate = (data, filterValue: string) => {
      return data.name.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(filterValue) !== -1;
    }
  };

  constructor(public dialogOpenerService: DialogOpenerService, public generalRouterService: GeneralRouterService) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
}
