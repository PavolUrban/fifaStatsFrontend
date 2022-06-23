import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PlayerTeamsDialogComponent } from '../player-teams-dialog/player-teams-dialog.component';

@Component({
  selector: 'app-team-top-goalscorers',
  templateUrl: './team-top-goalscorers.component.html',
  styleUrls: ['./team-top-goalscorers.component.scss']
})
export class TeamTopGoalscorersComponent implements OnInit {

  // Todo verify usage and remove this component

  @ViewChild(MatPaginator, { static: true }) paginator : MatPaginator;
  @ViewChild(MatSort, { static: true }) sort : MatSort;

  @Input() data;
  @Input() defaultPageSize = 15;

  @Input() onlyOnePossibleTeamLogo = false;

  @Input() goalscorersContainLogosItself = false;

  dataSource;  
  displayedColumns: string[];



  

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    if (this.goalscorersContainLogosItself) {
      if (this.onlyOnePossibleTeamLogo){
        this.displayedColumns = ['index','teamLogos','name','totalGoalsCount'];
      } else {
        this.displayedColumns = ['index','name','totalGoalsCount','teamLogos','numberOfTeamsPlayerScoredFor'];
      }
    } else {
      this.displayedColumns = ['index','name','totalGoalsCount']; // this is used only for single team view - there is no need to
    }

    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.dataSource.filterPredicate = ( data, filterValue: string) =>{
      return data.name.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(filterValue) !== -1;
    }
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openPlayersDetail(player) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      player: player
    };

   this.dialog.open(PlayerTeamsDialogComponent, dialogConfig);
  }

  goToTeamView(teamname)
  {
    this.router.navigate(['/teaminfo/'+teamname]);
  }

}
