import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatchDetailComponent } from '../components/match-detail/match-detail.component';
import { PlayerTeamsDialogComponent } from '../components/player-teams-dialog/player-teams-dialog.component';
import { Matches } from '../models/matches';

@Injectable({
    providedIn: 'root'
})
export class DialogOpenerService {

    constructor(private dialog: MatDialog) { }

    openMatchDetail(match: Matches) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = '750px';
        dialogConfig.data = {
            match: match
        };

        this.dialog.open(MatchDetailComponent, dialogConfig);
    }

    openPlayersDetail(name: string) {
        console.log("chcem otvorit pre");
        console.log(name);
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            name: name
        };

        this.dialog.open(PlayerTeamsDialogComponent, dialogConfig);
    }
}