import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MatchesService } from '../services/matches.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MatchesComponent implements OnInit, OnDestroy {


  subscription: Subscription = new Subscription();
  allMatches;




  constructor(private matchesService : MatchesService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.matchesService.getMatchesList().subscribe(data =>
      {
        this.allMatches = data;
      });
  }

  // reloadData() {
  //   this.matches = this.matchesService.getMatchesList();
  // }


  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }








}
