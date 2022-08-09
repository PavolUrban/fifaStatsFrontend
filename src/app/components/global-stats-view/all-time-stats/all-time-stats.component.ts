import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralService } from 'src/app/shared/services/general.service';

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
  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.subscription = this.generalService.getTrophyRoom().subscribe(data=>{
      this.trophyRoom = data;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
