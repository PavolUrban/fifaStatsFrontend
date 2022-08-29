import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { GoalscorersModel } from 'src/app/shared/models/goalscorers.model';
import { H2HPlayers } from 'src/app/shared/models/H2HPlayers.model';
import { TeamForTable } from 'src/app/shared/models/team-for-table.model';
import { GeneralRouterService } from 'src/app/shared/services/general-router.service';
import { MatchesService } from 'src/app/shared/services/matches.service';
import { GroupMatchesDialogComponent } from '../group-matches-dialog/group-matches-dialog.component';


@Component({
  selector: 'app-group-stage',
  templateUrl: './group-stage.component.html',
  styleUrls: ['./group-stage.component.scss']
})
export class GroupStageComponent implements OnInit {

  @Input() allGroups: Map<string, Array<TeamForTable>>;
  @Input() playersStats: Map<string, Array<H2HPlayers>>;
  @Input() competition: string;
  @Input() seasonName: string;
  @Input() goalscorersPerGroup: Map<string, Array<GoalscorersModel>>;

  subscription: Subscription = new Subscription();

  constructor(public generalRouterService: GeneralRouterService, private matchesService: MatchesService, private dialog: MatDialog) { }

  ngOnInit(): void { }

  // todo maybe we dont need group matches dialog component and it could be done with matchetablecomponent?
  displayCurrentGroupMatches(competitionPhase: string) {
    this.subscription = this.matchesService.getCustomMatches(this.competition, this.seasonName, competitionPhase).subscribe(data => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.minWidth = '900px';
      dialogConfig.minHeight = '500px';
      dialogConfig.data = {
        matches: data,
        groupName: competitionPhase
      };
      this.dialog.open(GroupMatchesDialogComponent, dialogConfig);
    });
  }
}
