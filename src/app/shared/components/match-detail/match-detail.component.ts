import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Matches } from '../../models/matches';
import { MatchesService } from '../../services/matches.service';
import { GeneralRouterService } from '../../services/general-router.service';
import { NEW_FORMAT, OLD_FORMAT } from '../../constants';
import { MatchDetailModel } from '../../models/match-detail.model';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent {
 
  // todo maybe rework somehow - think about situations when 2 events are at the same time!
  matchDetail: MatchDetailModel;
  match: Matches;
  oldFormat = OLD_FORMAT;
  newFormat = NEW_FORMAT;


  constructor(@Inject(MAT_DIALOG_DATA) data, public generalRouterService: GeneralRouterService,
    private matchesService: MatchesService) {
      console.log('match detail component entered');
    this.match = data['match'];
    this.matchesService.getMatchDetails$(this.match.id).subscribe(data => {
      this.matchDetail = data;
    })
  }
}
