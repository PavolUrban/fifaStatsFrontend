import { Component, OnInit} from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-time-stats',
  templateUrl: './all-time-stats.component.html',
  styleUrls: ['./all-time-stats.component.scss']
})
export class AllTimeStatsComponent implements OnInit {

  subscription: Subscription = new Subscription();
  subscriptionCards: Subscription = new Subscription();
  goalscorers;

  trophyRoom;
  winnersList;
  playersCardsStatisticsPerCompetition = null;
  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.subscription = this.generalService.getTrophyRoom().subscribe(data=>{
      this.trophyRoom = data;
    });

    this.subscriptionCards = this.generalService.getAllCards().subscribe(data=>{
      this.playersCardsStatisticsPerCompetition = data;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
