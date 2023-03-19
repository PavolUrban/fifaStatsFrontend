import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { MatchesService } from '../../../shared/services/matches.service';
import { Observable } from 'rxjs';
import { Matches } from 'src/app/shared/models/matches';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchesComponent {
  allMatches: Observable<Matches[]> = this.matchesService.getFilteredMatches$({competition: null, competitionPhase: null, season: null, teamName: null});

  constructor(private matchesService : MatchesService) {}
}
