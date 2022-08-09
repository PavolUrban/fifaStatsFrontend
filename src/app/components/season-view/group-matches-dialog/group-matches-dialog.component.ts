import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Matches } from 'src/app/shared/models/matches';

@Component({
  selector: 'app-group-matches-dialog',
  templateUrl: './group-matches-dialog.component.html',
  styleUrls: ['./group-matches-dialog.component.scss']
})
export class GroupMatchesDialogComponent implements OnInit {

  groupName = "";
  customMatches: Array<Matches>;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.customMatches = data["matches"];
    this.groupName = data["groupName"];
  }

  ngOnInit() {
  }
}
