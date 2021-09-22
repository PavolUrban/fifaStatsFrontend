import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-group-matches-dialog',
  templateUrl: './group-matches-dialog.component.html',
  styleUrls: ['./group-matches-dialog.component.scss']
})
export class GroupMatchesDialogComponent implements OnInit {

  customMatches;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.customMatches = data["matches"];
  }

  ngOnInit() {
  }


}
