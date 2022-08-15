import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CreateMatchComponent } from 'src/app/components/matches-view/create-match/create-match.component';
import { RecordInMatchComponent } from 'src/app/components/matches-view/record-in-match/record-in-match.component';
import { Matches } from '../../models/matches';
import { GeneralRouterService } from '../../services/general-router.service';
import { MatchDetailComponent } from '../match-detail/match-detail.component';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.scss']
})
export class MatchesTableComponent implements OnInit {
  
  @Input() currentTeam: string = null;
  @Input() editAllowed: boolean = false;
  @Input() showCompetitionPhase: boolean = true;
  @Input() showCompetition: boolean = true;
  @Input() pageSize: number = 5;
  @Input() set data(matches: Matches[]) {
    this.dataSource = new MatTableDataSource<Matches>(matches);
    this.dataSource.paginator = this.paginator;
  };

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  dataSource: MatTableDataSource<Matches> ;
  displayedColumns: string[] = ['index', 'season', 'competition', 'phase', 'winnerPlayer', 'hometeam', 'score', 'awayteam', 'winnerBadge', 'actions'];

  constructor(public generalRouterService: GeneralRouterService, private dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  addMatchDetails(match: Matches) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.minWidth = '750px';
    dialogConfig.minHeight = '600px';
    dialogConfig.data = {
      match: match
    };

    this.dialog.open(RecordInMatchComponent, dialogConfig);
  }

  openMatchDetail(match: Matches) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '750px';
    dialogConfig.minHeight = '600px';
    dialogConfig.data = {
      match: match
    };

    this.dialog.open(MatchDetailComponent, dialogConfig);
  }

  editMatch(match){
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.minWidth = '750px';
    dialogConfig.minHeight = '600px';
    dialogConfig.data = {
      match: match
    };


    const dialogRef =  this.dialog.open(CreateMatchComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data =>{
      console.log("teraz zatvaram");
      let teamUpdated = data;
      if(teamUpdated == true){
        // here we have to reload data
        //this.testSomethign();
        this._snackBar.openFromComponent(SnackBarComponent, {
          duration: 3000,
        });
      }
    });


  }

}
