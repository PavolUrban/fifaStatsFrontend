import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { RecordInMatchComponent } from 'src/app/components/matches-view/record-in-match/record-in-match.component';
import { Matches } from '../../models/matches';
import { DialogOpenerService } from '../../services/dialog-opener.service';
import { GeneralRouterService } from '../../services/general-router.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.scss']
})
export class MatchesTableComponent {
  
  @Input() currentTeam: string = null;
  @Input() currentTeamId: number;
  @Input() displayBadge: boolean = true;
  @Input() editAllowed: boolean = true; // todo just for testing -revert to false
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

  constructor(public generalRouterService: GeneralRouterService, private dialog: MatDialog, private _snackBar: MatSnackBar, public dialogOpenerService: DialogOpenerService) { }

  addMatchDetails(match: Matches) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.minWidth = '750px';
    dialogConfig.data = {
      match: match
    };

    this.dialog.open(RecordInMatchComponent, dialogConfig);
  }

  editMatch(match: Matches){
    this.dialogOpenerService.openCreateOrUpdateMatchDialog(match);
  }

}
