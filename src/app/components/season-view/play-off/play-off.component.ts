import { Component, OnInit, Input } from '@angular/core';
import { PlayOffsModel } from 'src/app/shared/models/play-offs.model';
import { GeneralService } from '../../../shared/services/general.service';

@Component({
  selector: 'app-play-off',
  templateUrl: './play-off.component.html',
  styleUrls: ['./play-off.component.scss']
})
export class PlayOffComponent implements OnInit {


  @Input() season:string;
  @Input() competition:string;
  @Input() playOff: PlayOffsModel;

  constructor(private generalService: GeneralService) { }

  ngOnInit() {

    console.log("toto je playoff v playOffkomponente");
    console.log(this.playOff);
    // this.generalService.getPlayOff(this.season, this.competition).subscribe(data=>{
    //   console.log(data);
    //  this.playOff = data;
    // })
  }

}
