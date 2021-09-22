import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewTeamDialogComponent } from '../new-team-dialog/new-team-dialog.component';
import { Router, NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-teams-lists',
  templateUrl: './teams-lists.component.html',
  styleUrls: ['./teams-lists.component.scss']
})
export class TeamsListsComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  subscription: Subscription = new Subscription();
  displayedColumns: string[] = ['index', 'teamName','country','firstSeasonEL', 'firstSeasonCL','actions'];
  dataSource = new MatTableDataSource();

  constructor(private teamsService : TeamsService, private dialog: MatDialog, private router: Router) { }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

  ngOnInit()
  {
    this.reloadData();
  }

  reloadData()
  {
   this.subscription =  this.teamsService.getTeamsList().subscribe(data =>
    {
      console.log(data);
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
    console.log();
    console.log(indexOfTeam);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    if(indexOfTeam != null)
    {
      dialogConfig.data = {
        team: this.dataSource.filteredData[indexOfTeam]
      };
    }

  let teamWasCreated = false;

  const dialogRef = this.dialog.open(NewTeamDialogComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(data =>{
    teamWasCreated = data;
    if(teamWasCreated == true)
    {
        this.reloadData();
    }

  } );

  }

  displaySingleTeamComponent(teamname)
  {

    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     "teamname": teamname
    //      // "team": JSON.stringify(team)
    //   }
    // };

    this.router.navigate(['/teaminfo/'+teamname]);

      // this.router.navigate(['/teaminfo/'+team.teamName], navigationExtras);
  }

}
