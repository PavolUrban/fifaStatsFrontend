import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { GoalscorersModel } from 'src/app/shared/models/goalscorers.model';
import { H2HPlayers } from 'src/app/shared/models/H2HPlayers.model';
import { FilteredMatchesRequestModel } from 'src/app/shared/models/matches/custom-matches-request.model';
import { SingleGroup } from 'src/app/shared/models/seasons/season-wrapper.model';
import { GeneralRouterService } from 'src/app/shared/services/general-router.service';
import { MatchesService } from 'src/app/shared/services/matches.service';
import { GroupMatchesDialogComponent } from '../group-matches-dialog/group-matches-dialog.component';


@Component({
  selector: 'app-group-stage',
  templateUrl: './group-stage.component.html',
  styleUrls: ['./group-stage.component.scss']
})
export class GroupStageComponent implements OnInit {

  @Input() allGroups: SingleGroup[];
  @Input() competition: string;
  @Input() seasonName: string;

  subscription: Subscription = new Subscription();

  constructor(public generalRouterService: GeneralRouterService, private matchesService: MatchesService, private dialog: MatDialog) { }

  ngOnInit(): void { }

  // todo maybe we dont need group matches dialog component and it could be done with matchetablecomponent?
  displayCurrentGroupMatches(competitionPhase: string) {
    const filteredMatchesRequest: FilteredMatchesRequestModel = {
      competition: this.competition,
      season: this.seasonName,
      competitionPhase, 
      teamName: null
    }
    this.subscription = this.matchesService.getFilteredMatches$(filteredMatchesRequest).subscribe(data => {
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
