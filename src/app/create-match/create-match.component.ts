import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith, Subscription } from 'rxjs'; //todo imports optmization
import { MatchesService } from '../services/matches.service';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = [];

  competitionsOptions: string[]  = ['CL', 'EL'];
  competitionPhaseOptions: string[] = ["GROUP S"]

  filteredOptions: Observable<string[]>;
  
  subscription: Subscription = new Subscription();

  constructor(private teamsService: TeamsService, private matchesService: MatchesService){}

  ngOnInit() {

    //todo getData here
    this.subscription = this.teamsService.getTeamNames().subscribe(data=>
      {
        this.options = data as string[];
  
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value, this.options))
        );
      });

      this.subscription = this.matchesService.getDataToCreateMatch('CL').subscribe(data=>{
        console.log('All the data for match creation');
        console.log(data);

      });
  }




  private _filter(value: string, options): string[] {
    const filterValue = value.toLowerCase();

    return options.filter(option => option.toLowerCase().includes(filterValue));
  }



}
