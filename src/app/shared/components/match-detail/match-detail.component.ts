import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Matches } from '../../models/matches';
import { MatchesService } from '../../services/matches.service';
import { GeneralRouterService } from '../../services/general-router.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent {

  match: Matches;
  events; // todo add type - maybe rework somehow - think about situations when 2 events are at the same time!
  constructor(@Inject(MAT_DIALOG_DATA) data, public generalRouterService: GeneralRouterService,
              private matchesService: MatchesService) {
    this.match = data['match'];

    this.matchesService.getMatchDetailsNew(this.match.id, this.match.hometeam, this.match.awayteam).subscribe(data=>{
      this.events = data['events'];
      console.log(this.events);
    })
  }
}
