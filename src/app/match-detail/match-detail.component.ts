import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Matches } from '../matches';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent {

  match: Matches;
  events; // todo add type
  constructor(@Inject(MAT_DIALOG_DATA) data,
              private router: Router, private matchesService: MatchesService) {
    this.match = data['match'];

    this.matchesService.getMatchDetailsNew(this.match.id, this.match.hometeam, this.match.awayteam).subscribe(data=>{
      this.events = data['events'];
      console.log(this.events);
    })
  }
  
  goToTeamView(teamname){
    // todo call service to get team info
    this.router.navigate(['/teaminfo/'+teamname]);
  }

  counter(i: number) {
    return new Array(i);
}
}
