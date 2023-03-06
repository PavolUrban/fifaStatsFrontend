import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-goalscorers-wrapper',
  templateUrl: './goalscorers-wrapper.component.html',
  styleUrls: ['./goalscorers-wrapper.component.scss']
})
export class GoalscorersWrapperComponent implements OnInit, OnChanges {
  @Input() teamId: number = null;
  @Input() displayNumberOfTeamsPlayerScored = false;
  @Input() pageSize = 5;

  alreadyInitialized = false;
  currentlyDisplayed;
  showView = new Map([["CL", false], ["EL", false], ["Total", false]]);
  
  constructor(private generalService: GeneralService) { }
  ngOnInit(): void {
    this.getGoalscorersPerCompetition('CL', 'CL');
    this.alreadyInitialized = true;
  }
  
  ngOnChanges(): void {
    if(this.teamId && this.alreadyInitialized){
      this.getGoalscorersPerCompetition('CL', 'CL');
    }
  }

  tabChanged(event: MatTabChangeEvent): void {
    if (event.index === 0){
      this.getGoalscorersPerCompetition('CL', 'CL');
    } else if (event.index === 1) {
      this.getGoalscorersPerCompetition('EL', 'EL');
    } else {
      this.getGoalscorersPerCompetition(null, 'Total');
    }
  }

  getGoalscorersPerCompetition(competition: string, viewName: string): void{
    
    this.generalService.getGoalscorersTheNewestToRelocate({competition: competition, teamId: this.teamId}).subscribe(data=>{
      this.currentlyDisplayed = data;
      this.setProperView(viewName);
    })
  }

  setProperView(competition: string){
    for (let [key, value] of  this.showView.entries()) {
      if (key === competition){
        this.showView.set(key, true);
      } else {
        this.showView.set(key, false);
      }
    }
  }

}
