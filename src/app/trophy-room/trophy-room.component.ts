import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trophy-room',
  templateUrl: './trophy-room.component.html',
  styleUrls: ['./trophy-room.component.scss']
})
export class TrophyRoomComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
