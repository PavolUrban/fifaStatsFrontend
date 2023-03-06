import { Component, Input, OnChanges } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-players-cards-wrapper',
  templateUrl: './players-cards-wrapper.component.html',
  styleUrls: ['./players-cards-wrapper.component.scss'],
})
export class PlayersCardsWrapperComponent implements OnChanges {

  @Input() teamId: number = null;
  currentlyDisplayed;
  alreadyInitialized= false;

  showView = new Map([["Total", false], ["CL", false], ["EL", false]]);

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    console.log('volam on init cards');
    this.getCardsPerCompetition(null, 'Total');
    this.alreadyInitialized = true;
  }

  ngOnChanges(): void {
  
    if(this.teamId && this.alreadyInitialized){
      console.log('nastavujem carty cez onchanges');
      this.getCardsPerCompetition(null, 'Total');
    }
  }


  
  
  tabChanged(event: MatTabChangeEvent): void {
    // 0 =
    if (event.index === 0){
      this.getCardsPerCompetition(null, 'Total');
    } else if (event.index === 1) {
      this.getCardsPerCompetition('CL', 'CL');
    } else {
      this.getCardsPerCompetition('EL', 'EL');
    }
  }

  getCardsPerCompetition(competition: string, viewName: string){
    this.generalService.getCardsTheNewestToRelocate({competition: competition, teamId: this.teamId}).subscribe(data=>{

      console.log('nove data');
      console.log(data);
      this.currentlyDisplayed = data;
      this.setProperView(viewName);
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
