import { Component, Input, OnInit } from '@angular/core';
import { GoalDistributonModel } from '../../models/goal-distribution.model';
import { RecordsInMatchesService } from '../../services/records-in-matches.service';

@Component({
  selector: 'app-goal-distributon',
  templateUrl: './goal-distributon.component.html',
  styleUrls: ['./goal-distributon.component.scss']
})
export class GoalDistributonComponent implements OnInit {

  @Input() teamId: number;
  goalDistribution: GoalDistributonModel;
  
  constructor(private recordsInMatchesService: RecordsInMatchesService) { }

  ngOnInit(): void {
    this.recordsInMatchesService.getGoalDistribution(this.teamId).subscribe(data=> {
      this.goalDistribution = data as GoalDistributonModel;
    })
  }

}
