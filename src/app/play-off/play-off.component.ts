import { Component, OnInit, Input } from '@angular/core';
import { GeneralService } from '../shared/services/general.service';

@Component({
  selector: 'app-play-off',
  templateUrl: './play-off.component.html',
  styleUrls: ['./play-off.component.scss']
})
export class PlayOffComponent implements OnInit {


  @Input() season:string;
  @Input() competition:string;
  @Input() playOff;

  constructor(private generalService: GeneralService) { }

  ngOnInit() {

    // this.generalService.getPlayOff(this.season, this.competition).subscribe(data=>{
    //   console.log(data);
    //  this.playOff = data;
    // })
  }

}
