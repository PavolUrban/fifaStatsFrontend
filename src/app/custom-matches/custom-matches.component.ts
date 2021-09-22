import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { Matches } from '../matches';
import { Observable } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogConfig, MatDialog } from '@angular/material';
import { MatchDetailComponent } from '../match-detail/match-detail.component';
import { Teams } from '../teams';

@Component({
  selector: 'app-custom-matches',
  templateUrl: './custom-matches.component.html',
  styleUrls: ['./custom-matches.component.scss']
})
export class CustomMatchesComponent implements OnInit {

  @Input() matchWinner: string = null;
  @Input() dataSourceNew;
  @Input() matCardSubtitle: string;
  @Input() matCardTitle: string;
  @Input() initPageSize: number = 5;


  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  team : Teams;
  match: Matches = new Matches();
  matches: Observable<Matches[]>;
  displayedColumns: string[] = ['index','season','competition','phase', 'hometeam','score', 'awayteam','winnerBadge', 'matchDetail'];
  dataSource = new MatTableDataSource();



  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.dataSourceNew); //JSON.parse(JSON.stringify(data['matches'].slice(0, 6)))
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource(this.dataSourceNew); //JSON.parse(JSON.stringify(data['matches'].slice(0, 6)))
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openMatchDetail(match)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '600px';
    dialogConfig.minHeight = '600px';
    dialogConfig.data = {
      match: match
    };

    this.dialog.open(MatchDetailComponent, dialogConfig);
  }


  // displayBilance;

  // displayChart()
}
