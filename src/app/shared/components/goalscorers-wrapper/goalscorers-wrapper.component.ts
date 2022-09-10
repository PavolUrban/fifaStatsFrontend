import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-goalscorers-wrapper',
  templateUrl: './goalscorers-wrapper.component.html',
  styleUrls: ['./goalscorers-wrapper.component.scss']
})
export class GoalscorersWrapperComponent implements OnInit, OnChanges {
  @Input() teamName: string = null;
  @Input() displayNumberOfTeamsPlayerScored = false;
  @Input() pageSize = 5;

  alreadyInitialized = false;
  currentlyDisplayed;
  showView = new Map([["CL", false], ["EL", false], ["Total", false]]);
  
  constructor(private generalService: GeneralService) { }
  ngOnInit(): void {
    console.log('volam on init goalscorers');
    this.getGoalscorersPerCompetition('CL');
    this.alreadyInitialized = true;
  }
  
  ngOnChanges(): void {
    if(this.teamName && this.alreadyInitialized){
      console.log('nastavujem goalscorers cez on changes');
      this.getGoalscorersPerCompetition('CL');
    }
  }

  tabChanged(event: MatTabChangeEvent): void {
    if (event.index === 0){
      this.getGoalscorersPerCompetition('CL');
    } else if (event.index === 1) {
      this.getGoalscorersPerCompetition('EL');
    } else {
      this.getGoalscorersPerCompetition('Total');
    }
  }

  getGoalscorersPerCompetition(competition: string): void{
    
    this.generalService.getGoalscorersTheNewestToRelocate(competition, this.teamName).subscribe(data=>{
      this.currentlyDisplayed = data;
      this.setProperView(competition);
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
