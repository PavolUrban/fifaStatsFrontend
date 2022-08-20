import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Matches } from '../../models/matches';
import { MatchesService } from '../../services/matches.service';
import { GeneralRouterService } from '../../services/general-router.service';
import { EventsInMatchModel } from '../../models/events-in-match.model';
import { NEW_FORMAT, OLD_FORMAT } from '../../constants';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent {
  
  // todo maybe rework somehow - think about situations when 2 events are at the same time!
  events: Array<EventsInMatchModel>; 
  match: Matches;
  oldFormat = OLD_FORMAT;
  newFormat = NEW_FORMAT;

  constructor(@Inject(MAT_DIALOG_DATA) data, public generalRouterService: GeneralRouterService,
              private matchesService: MatchesService) {
    this.match = data['match'];

    this.matchesService.getMatchDetailsNew(this.match.id, this.match.hometeam, this.match.awayteam).subscribe(data=>{
      console.log(data);
      this.events = data['events'];
      console.log(this.events);
    })
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
