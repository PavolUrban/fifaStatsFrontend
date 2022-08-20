import { Component, Input, OnInit } from '@angular/core';
import { Matches } from 'src/app/shared/models/matches';
import { MatchesService } from 'src/app/shared/services/matches.service';
import { PAVOL_JAY, KOTLIK, CHAMPIONS_LEAGUE, EUROPEAN_LEAGUE, ALL } from 'src/app/shared/constants';

@Component({
  selector: 'app-top-matches',
  templateUrl: './top-matches.component.html',
  styleUrls: ['./top-matches.component.scss']
})
export class TopMatchesComponent implements OnInit {

  @Input() specificTeam: string = ALL;

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

  ngOnInit(): void {
   this.updateMatches();
  }

  updateMatches() {
    if(this.selectedRecordType === this.biggestAwayWins || this.selectedRecordType === this.biggestHomeWins){
      this.isPlayersListDisabled = false;
    } else {
      this.isPlayersListDisabled = true;
    }

    this.matchesService.getMatchesByRecordType(this.selectedRecordType, this.selectedPlayer, this.selectedCompetition, this.specificTeam).subscribe(data => {
      this.matches = data as Array<Matches>;
    });
  }


}
