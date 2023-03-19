import { Component, Input } from '@angular/core';
import { Matches } from 'src/app/shared/models/matches';
import { MatchesService } from 'src/app/shared/services/matches.service';
import { PAVOL_JAY, KOTLIK, CHAMPIONS_LEAGUE, EUROPEAN_LEAGUE, ALL } from 'src/app/shared/constants';
import { TopMatchesRequestModel } from 'src/app/shared/models/matches/top-matches-request.model';

@Component({
  selector: 'app-top-matches',
  templateUrl: './top-matches.component.html',
  styleUrls: ['./top-matches.component.scss']
})
export class TopMatchesComponent {
 // TODO rework this component
  idToRename: number;

  @Input() set teamId(newTeamId: number) {
    this.idToRename = newTeamId;
    this.updateMatches();
  };

  mostGoalsInMatch = 'Most goals in match';
  biggestAwayWins = 'Biggest Away Wins';
  biggestHomeWins = 'Biggest Home Wins';
  biggestDraws = 'Biggest Draws';
  recordList = [this.mostGoalsInMatch, this.biggestHomeWins, this.biggestAwayWins, this.biggestDraws];
  selectedRecordType = this.mostGoalsInMatch;

  playersList = [PAVOL_JAY, KOTLIK, ALL];
  selectedPlayer = ALL;
  isPlayersListDisabled = true;

  competitionList = [CHAMPIONS_LEAGUE, EUROPEAN_LEAGUE, ALL];
  selectedCompetition = ALL;

  matches: Array<Matches>;

  constructor(private matchesService: MatchesService) { }


  updateMatches() {
    if(this.selectedRecordType === this.biggestAwayWins || this.selectedRecordType === this.biggestHomeWins){
      this.isPlayersListDisabled = false;
    } else {
      this.isPlayersListDisabled = true;
    }

    const topMatchesRequest: TopMatchesRequestModel = {
      recordType: this.selectedRecordType,
      selectedPlayer: this.selectedPlayer === ALL ? null : this.selectedPlayer,
      selectedCompetition: this.selectedCompetition === ALL ? null : this.selectedCompetition,
      teamId: this.idToRename
    }

    this.matchesService.getTopMatches(topMatchesRequest).subscribe(data => {
      this.matches = data;
    });
  }


}
