import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalStatsService } from 'src/app/shared/services/global-stats.service';

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
  constructor(private globalStatsService: GlobalStatsService) { }

  ngOnInit() {
    this.subscription = this.globalStatsService.getTrophyRoom().subscribe(data=>{
      this.trophyRoom = data;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
