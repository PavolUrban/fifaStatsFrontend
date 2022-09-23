import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, Subscription } from 'rxjs';
import { SingleTeamModel } from 'src/app/shared/models/single-team.model';
import { TrophyRoomModel } from 'src/app/shared/models/trophy-room.model';
import { TeamsService } from '../../../shared/services/teams.service';

@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrls: ['./single-team.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SingleTeamComponent implements OnInit, OnDestroy {

  subtitle: string = "All European competitions"
  teamStats: SingleTeamModel;
  trophyRoomData: TrophyRoomModel;
  subscription = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, private teamsService: TeamsService) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.pipe(
      concatMap(item => {
        return this.teamsService.getSingleTeamStats(item['teamName']);
      })
    ).subscribe(data => {
      console.log(data);
      this.teamStats = data as SingleTeamModel;
      this.trophyRoomData = new TrophyRoomModel(this.teamStats.teamStatsCL.titlesCount, this.teamStats.teamStatsEL.titlesCount);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
