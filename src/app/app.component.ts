import { Component, OnInit } from '@angular/core';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private generalService : GeneralService) { }

  seasonsList = [];

  ngOnInit() {
    this.generalService.getSeasonsList().subscribe(data=>{
      this.seasonsList = JSON.parse(JSON.stringify(data));
    });

  }

}
