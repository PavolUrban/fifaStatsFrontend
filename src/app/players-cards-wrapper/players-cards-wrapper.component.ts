import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-players-cards-wrapper',
  templateUrl: './players-cards-wrapper.component.html',
  styleUrls: ['./players-cards-wrapper.component.scss'],
 // encapsulation: ViewEncapsulation.None
})
export class PlayersCardsWrapperComponent implements OnInit {

  @Input() completePlayerStats;
  currentlyDisplayed;

  showView = new Map([["Total", false], ["CL", false], ["EL", false]]);

  constructor() { }

  ngOnInit(): void {
    console.log("cards");
    console.log(this.completePlayerStats);
    this.currentlyDisplayed = this.completePlayerStats['Total'];
    this.setProperView('Total');
  }

  
  tabChanged(event: MatTabChangeEvent): void {
    if (event.index === 0){
      this.currentlyDisplayed = this.completePlayerStats['Total'];
      this.setProperView('Total');
    } else if (event.index === 1) {
      this.currentlyDisplayed = this.completePlayerStats['CL'];
      this.setProperView('CL');
    } else {
      this.currentlyDisplayed = this.completePlayerStats['EL'];
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
