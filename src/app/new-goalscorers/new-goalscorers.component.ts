import { Component, Input, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Subscription } from 'rxjs';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-new-goalscorers',
  templateUrl: './new-goalscorers.component.html',
  styleUrls: ['./new-goalscorers.component.scss']
})
export class NewGoalscorersComponent implements OnInit {

  @Input() teamName: string;
  @Input() defaultPageSize = 15;

  subscription: Subscription = new Subscription();
  allTeamGoalScorers;
  currentlyDisplayed;
  showView = new Map([["Total", false], ["CL", false], ["EL", false]]);
  allLogos;
  
  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {

    if(this.teamName){
      this.subscription =  this.generalService.getTopGoalScorersForTeam(this.teamName).subscribe(data=>{
        this.allTeamGoalScorers = data;
        this.prepareData();
      });
    } else {
      this.subscription = this.generalService.getAllTopGoalScorers().subscribe(data=>{
        this.allTeamGoalScorers = data;       
      });
    }

  }

  prepareData(): void {
    this.currentlyDisplayed = this.allTeamGoalScorers['Total'];
    this.setProperView('Total');
  }

  tabChanged(event: MatTabChangeEvent): void {
    if (event.index === 0){
      this.currentlyDisplayed = this.allTeamGoalScorers['Total'];
      this.setProperView('Total');
    } else if (event.index === 1) {
      this.currentlyDisplayed = this.allTeamGoalScorers['CL'];
      this.setProperView('CL');
    } else {
      this.currentlyDisplayed = this.allTeamGoalScorers['EL'];
      this.setProperView('EL');
    }
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
