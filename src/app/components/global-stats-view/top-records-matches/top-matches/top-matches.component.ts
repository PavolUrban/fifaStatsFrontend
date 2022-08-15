import { Component, OnInit } from '@angular/core';
import { Matches } from 'src/app/shared/models/matches';
import { MatchesService } from 'src/app/shared/services/matches.service';

@Component({
  selector: 'app-top-matches',
  templateUrl: './top-matches.component.html',
  styleUrls: ['./top-matches.component.scss']
})
export class TopMatchesComponent implements OnInit {
  mostGoalsInMatch = 'Most goals in match';
  biggestAwayWins = 'Biggest Away Wins';
  biggestHomeWins = 'Biggest Home Wins';
  biggestDraws = 'Biggest Draws';
  recordList = [this.mostGoalsInMatch, this.biggestHomeWins, this.biggestAwayWins, this.biggestDraws];
  selectedRecordType = this.mostGoalsInMatch;
  
  matches: Array<Matches>;


  constructor(private matchesService: MatchesService) { }

  ngOnInit(): void {
    this.matchesService.getMatchesByRecordType(this.mostGoalsInMatch).subscribe(data=> {
      this.matches = data as Array<Matches>;
    });
  }

  updateMatches(){
    this.matchesService.getMatchesByRecordType(this.selectedRecordType).subscribe(data=> {
      this.matches = data as Array<Matches>;
    });
  }


}
