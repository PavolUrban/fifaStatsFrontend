import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { TeamsService } from '../../../shared/services/teams.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewTeamDialogComponent } from '../new-team-dialog/new-team-dialog.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-teams-lists',
  templateUrl: './all-teams-view.component.html',
  styleUrls: ['./all-teams-view.component.scss']
})
export class TeamsListsComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator, { static: true }) paginator : MatPaginator;
  @ViewChild(MatSort, { static: true }) sort : MatSort;

  subscription: Subscription = new Subscription();
  displayedColumns: string[] = ['index', 'teamName','country','firstSeasonEL', 'firstSeasonCL','actions'];
  dataSource = new MatTableDataSource();

  constructor(private teamsService : TeamsService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.reloadData(false);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
 

  reloadData(recalculate: boolean)
  {
   this.subscription =  this.teamsService.getTeamsList(recalculate).subscribe(data =>
    {
      this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(data)));
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openDialog(indexOfTeam) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    if(indexOfTeam != null) {
      dialogConfig.data = {
        team: this.dataSource.filteredData[indexOfTeam]
      };
    }

    let teamWasCreated = false;

    const dialogRef = this.dialog.open(NewTeamDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data =>{
      teamWasCreated = data;
      if(teamWasCreated == true){
          this.reloadData(false);
      }
    });

  }

  displaySingleTeamComponent(teamname: string): void {
    this.router.navigate(['/teaminfo/'+teamname]);
  }

}
