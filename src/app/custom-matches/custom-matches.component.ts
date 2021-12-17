import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { Matches } from '../matches';
import { Observable } from 'rxjs';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatchDetailComponent } from '../match-detail/match-detail.component';
import { Teams } from '../teams';
import { Router } from '@angular/router';
import { CreateMatchComponent } from '../create-match/create-match.component';

@Component({
  selector: 'app-custom-matches',
  templateUrl: './custom-matches.component.html',
  styleUrls: ['./custom-matches.component.scss']
})
export class CustomMatchesComponent implements OnInit {

  @Input() currentTeam: string = null;
  @Input() dataSourceNew;
  @Input() matCardSubtitle: string;
  @Input() matCardTitle: string;
  @Input() initPageSize: number = 5;
  @Input() logos;

  @ViewChild(MatPaginator, { static: true }) paginator : MatPaginator;
  @ViewChild(MatSort, { static: true }) sort : MatSort;

  team : Teams;
  match: Matches = new Matches();
  matches: Observable<Matches[]>;
  displayedColumns: string[] = ['index','season','competition','phase', 'hometeam','score', 'awayteam','winnerBadge', 'matchDetail'];
  dataSource = new MatTableDataSource();

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.dataSourceNew);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openMatchDetail(match)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '750px';
    dialogConfig.minHeight = '600px';
    dialogConfig.data = {
      match: match
    };

    this.dialog.open(MatchDetailComponent, dialogConfig);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //todo move this function to some service - it is duplicate
  goToTeamView(teamname){
    this.router.navigate(['/teaminfo/'+teamname]) .then(() => {
      window.location.reload();
    });
  }

  goToSeasonView(season, competition){
    this.router.navigate(['/season/'+season+"/"+competition]);
  }

  editMatch(match){
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.minWidth = '750px';
    dialogConfig.minHeight = '600px';
    dialogConfig.data = {
      match: match
    };

    this.dialog.open(CreateMatchComponent, dialogConfig);

  }
}
