import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../../shared/services/general.service';
import { Subscription } from 'rxjs';
import { SeasonModel } from 'src/app/shared/models/season.model';
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
  seasonModel: SeasonModel;

  nextSeason: string = null;
  previousSeason: string = null;

  constructor(private activatedRoute: ActivatedRoute, private generalService: GeneralService, public generalRouterService: GeneralRouterService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.nextSeason = null;
      this.previousSeason = null;
      this.seasonName = params['seasonname'];
      this.competition = params['competition'];

      // todo toto nejak zjednodusit
      if (this.competition === 'CL') {
        this.competitionName = 'Champions league';
      } else {
        this.competitionName = 'European league';
      }

      this.subscription = this.generalService.getSeason(this.seasonName, this.competition).subscribe(data => {
        this.seasonModel = data as SeasonModel; //data["playOffs"] round of 32 will be missing todo
      });

      this.generalService.getSeasonsList().subscribe(seasons=>{
        let seasonsList = seasons as Array<string>;
        let currentSeasonIndex = seasonsList.indexOf(this.seasonName);
        
        if(currentSeasonIndex !== 0) {
          this.previousSeason = seasonsList[currentSeasonIndex - 1] ;
        }

        if(currentSeasonIndex !== seasonsList.length - 1) {
          this.nextSeason = seasonsList[currentSeasonIndex + 1];
        }
      });
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
