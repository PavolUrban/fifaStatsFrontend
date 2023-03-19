import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateMatchComponent } from 'src/app/components/matches-view/create-match/create-match.component';
import { MatchDetailComponent } from '../components/match-detail/match-detail.component';
import { PlayerDetailsDialogComponent } from '../components/player-details-dialog,component/player-details-dialog,component';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';
import { Matches } from '../models/matches';
import { DataToCreateMatchModel } from '../models/matches/data-to-create-match.model';
import { MatchesService } from './matches.service';

@Injectable({
    providedIn: 'root'
})
export class DialogOpenerService {

    constructor(private dialog: MatDialog, private matchesService: MatchesService, private _snackBar: MatSnackBar) { }

    openMatchDetail(match: Matches): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = '750px';
        dialogConfig.data = {
            match: match
        };

        this.dialog.open(MatchDetailComponent, dialogConfig);
    }

    openPlayerDetail(playerId: number): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = false;
        dialogConfig.data = { playerId };
        this.dialog.open(PlayerDetailsDialogComponent, dialogConfig);
    }

    openCreateOrUpdateMatchDialog(match: Matches): void {
        this.matchesService.getDataToCreateMatch$().subscribe((data: DataToCreateMatchModel) => {
            const dialogConfig = new MatDialogConfig();
            dialogConfig.autoFocus = false;
            dialogConfig.minWidth = '800px';
            dialogConfig.minHeight = '600px';
            dialogConfig.data = {
                dataToCreateMatch: data,
                match: match !== null ? match : this.matchesService.getNewMatchObject()
            };
            const dialogRef = this.dialog.open(CreateMatchComponent, dialogConfig);

            dialogRef.afterClosed().subscribe((match: Matches) => {
                if (match) {
                    this.matchesService.createOrUpdateMatch$(match).subscribe(() => {
                        this._snackBar.openFromComponent(SnackBarComponent, {
                            duration: 3000,
                        });
                    });

                }
            });
        });
    }

}