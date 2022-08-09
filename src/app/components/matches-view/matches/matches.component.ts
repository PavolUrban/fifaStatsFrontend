import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MatchesService } from '../../../shared/services/matches.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MatchesComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  allMatches;

  constructor(private matchesService : MatchesService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {

    //todo coment this out
  // this.matchesService.insertAllRecordsToNewTable().subscribe();

    this.subscription = this.matchesService.getMatchesList().subscribe(data =>
      {
        this.allMatches = data;
      });
  }

}
