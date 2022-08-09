import { Component, OnInit } from '@angular/core';
import { GeneralService } from './shared/services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private generalService : GeneralService) { }

  seasonsList: Array<string> = [];

  ngOnInit() {
    this.generalService.getSeasonsList().subscribe(data=>{
      this.seasonsList = data as Array<string>;
    });
  }
}
