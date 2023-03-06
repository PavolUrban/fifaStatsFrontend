import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralService } from './shared/services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  seasonsList$: Observable<string[]> = this.generalService.getSeasonsList();
  
  constructor(private generalService : GeneralService) { }
}
