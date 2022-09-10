import { Component, Input, OnChanges } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-players-cards-wrapper',
  templateUrl: './players-cards-wrapper.component.html',
  styleUrls: ['./players-cards-wrapper.component.scss'],
})
export class PlayersCardsWrapperComponent implements OnChanges {

  @Input() teamName: string = null;
  currentlyDisplayed;
  alreadyInitialized= false;

  showView = new Map([["Total", false], ["CL", false], ["EL", false]]);

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    console.log('volam on init cards');
    this.getCardsPerCompetition('Total');
    this.alreadyInitialized = true;
  }

  ngOnChanges(): void {
  
    if(this.teamName && this.alreadyInitialized){
      console.log('nastavujem carty cez onchanges');
      this.getCardsPerCompetition('Total');
    }
  }


  
  
  tabChanged(event: MatTabChangeEvent): void {
    if (event.index === 0){
      this.getCardsPerCompetition('Total');
    } else if (event.index === 1) {
      this.getCardsPerCompetition('CL');
    } else {
      this.getCardsPerCompetition('EL');
    }
  }

  getCardsPerCompetition(competition: string){
    this.generalService.getCardsTheNewestToRelocate(competition, this.teamName).subscribe(data=>{

      console.log('nove data');
      console.log(data);
      this.currentlyDisplayed = data;
      this.setProperView(competition);
    });
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
