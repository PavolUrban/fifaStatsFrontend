import { Component, OnInit } from '@angular/core';
import { RecordsInMatchesService } from '../../services/records-in-matches.service';

@Component({
  selector: 'app-goal-distributon',
  templateUrl: './goal-distributon.component.html',
  styleUrls: ['./goal-distributon.component.scss']
})
export class GoalDistributonComponent implements OnInit {

  constructor(private recordsInMatchesService: RecordsInMatchesService) { }

  ngOnInit(): void {
    this.recordsInMatchesService.getGoalDistribution("Liverpool FC").subscribe(data=> {
      console.log(data);
    })
  }

}
