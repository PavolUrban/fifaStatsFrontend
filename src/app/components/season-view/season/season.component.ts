import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../../shared/services/general.service';
import { Subscription } from 'rxjs';
import { MatchesService } from '../../../shared/services/matches.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { GroupMatchesDialogComponent } from '../group-matches-dialog/group-matches-dialog.component';
import { SeasonModel } from 'src/app/shared/models/season.model';
import { PlayOffsModel } from 'src/app/shared/models/play-offs.model';
import { GeneralRouterService } from 'src/app/shared/services/general-router.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss'],
})
export class SeasonComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  seasonName: string = "";
  competition: string = "";
  competitionName: string;
  playOffs: PlayOffsModel;

  seasonModel: SeasonModel;
  constructor(private activatedRoute: ActivatedRoute, private generalService: GeneralService, public generalRouterService: GeneralRouterService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.seasonName = params['seasonname'];
      this.competition = params['competition'];

      // todo toto nejak zjednodusit
      if (this.competition === 'CL') {
        this.competitionName = 'Champions league';
      } else {
        this.competitionName = 'European league';
      }

      // todo toto zjednotit
      this.subscription = this.generalService.getSeason(this.seasonName, this.competition).subscribe(data => {
        this.seasonModel = data as SeasonModel;
        this.playOffs = this.seasonModel.playOffs; //data["playOffs"] round of 32 will be missing todo
      });
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
