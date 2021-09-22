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
  goalscorers;
  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.subscription =  this.generalService.getTopGoalScorers().subscribe(data=>{
      this.goalscorers = data;
    })
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

}
