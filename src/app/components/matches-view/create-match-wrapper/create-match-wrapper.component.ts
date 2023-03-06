import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateMatchComponent } from '../create-match/create-match.component';

@Component({
  selector: 'app-create-match-wrapper',
  templateUrl: './create-match-wrapper.component.html',
  styleUrls: ['./create-match-wrapper.component.scss']
})
export class CreateMatchWrapperComponent {

  constructor(private dialog: MatDialog) { }

  openMatchDetail(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.minWidth = '800px';
    dialogConfig.minHeight = '600px';
    this.dialog.open(CreateMatchComponent, dialogConfig); // todo revert to CreateMatchComponent
  }

}
