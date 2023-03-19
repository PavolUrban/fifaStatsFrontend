import { Component } from '@angular/core';
import { DialogOpenerService } from 'src/app/shared/services/dialog-opener.service';

@Component({
  selector: 'app-create-match-wrapper',
  templateUrl: './create-match-wrapper.component.html',
  styleUrls: ['./create-match-wrapper.component.scss']
})
export class CreateMatchWrapperComponent {

  constructor(private dialogOpenerService: DialogOpenerService) {}

  openMatchDetail(): void {
    this.dialogOpenerService.openCreateOrUpdateMatchDialog(null);
  }

}
