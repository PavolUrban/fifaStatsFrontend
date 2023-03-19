import { Component, Input } from '@angular/core';
import { PlayOffStageModel } from 'src/app/shared/models/seasons/season-wrapper.model';

@Component({
  selector: 'app-play-off',
  templateUrl: './play-off.component.html',
  styleUrls: ['./play-off.component.scss']
})
export class PlayOffComponent {
  @Input() season:string;
  @Input() competition:string;
  @Input() playOff: PlayOffStageModel;

  constructor() { }
}
