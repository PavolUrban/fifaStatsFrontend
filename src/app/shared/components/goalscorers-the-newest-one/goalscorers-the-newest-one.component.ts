import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PlayerTeamsDialogComponent } from '../../../player-teams-dialog/player-teams-dialog.component';

@Component({
  selector: 'app-goalscorers-the-newest-one',
  templateUrl: './goalscorers-the-newest-one.component.html',
  styleUrls: ['./goalscorers-the-newest-one.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GoalscorersTheNewestOneComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator : MatPaginator;
  @ViewChild(MatSort, { static: true }) sort : MatSort;

  @Input() data;
  @Input() pageSize = 15;
  @Input() displayNumberOfTeamsPlayerScored = false;

  dataSource;
  displayedColumns: string[];


  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    if(this.displayNumberOfTeamsPlayerScored){
      this.displayedColumns = ['index','name','totalGoalsCount','numberOfTeamsPlayerScoredFor'];
    } else {
      this.displayedColumns = ['index','name','totalGoalsCount'];
    }
  

    this.dataSource.filterPredicate = ( data, filterValue: string) =>{
      return data.name.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(filterValue) !== -1;
    }
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  openPlayersDetail(name: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      player: name
    };

   this.dialog.open(PlayerTeamsDialogComponent, dialogConfig);
  }

  goToTeamView(teamname: string){
    this.router.navigate(['/teaminfo/'+teamname]);
  }

}
