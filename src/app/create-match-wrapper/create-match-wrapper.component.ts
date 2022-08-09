import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateMatchComponent } from '../components/create-match/create-match.component';

@Component({
  selector: 'app-create-match-wrapper',
  templateUrl: './create-match-wrapper.component.html',
  styleUrls: ['./create-match-wrapper.component.scss']
})
export class CreateMatchWrapperComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openMatchDetail()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.minWidth = '750px';
    dialogConfig.minHeight = '600px';
    // dialogConfig.data = {
    //   match: match
    // };

    this.dialog.open(CreateMatchComponent, dialogConfig);
  }

}
