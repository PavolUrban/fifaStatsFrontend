import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerTeamsDialogComponent } from '../player-teams-dialog/player-teams-dialog.component';

@Component({
  selector: 'app-goalscorers',
  templateUrl: './goalscorers.component.html',
  styleUrls: ['./goalscorers.component.scss']
})
export class GoalscorersComponent implements OnInit, OnChanges{

  @ViewChild(MatPaginator, { static: true }) paginator : MatPaginator;
  @ViewChild(MatSort, { static: true }) sort : MatSort;

  @Input() paginatorDefaultItems : number = 5;
  @Input() source;
  @Input() logos: object;
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() displayAllButton: boolean = false;
  public currentPage = 0;

  @Input() logos2: object;

  displayedColumns: string[] = ['index','name','goals'];
  dataSource ;

  pageEvent: PageEvent;

  constructor(private dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {

      this.dataSource = new MatTableDataSource(this.source); //JSON.parse(JSON.stringify(data['matches'].slice(0, 6)))
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.source);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openPlayersDetail(player) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      player: player
    };

   this.dialog.open(PlayerTeamsDialogComponent, dialogConfig);
  }

}
