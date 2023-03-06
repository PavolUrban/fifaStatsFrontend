import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged, filter, Subject, switchMap } from 'rxjs';
import { FifaPlayerModelDB } from 'src/app/shared/models/fifa-player-db.model';
import { RecordsInMatchesModel } from 'src/app/shared/models/records-in-matches/records-in-matches.model';
import { RecordsInMatchesService } from 'src/app/shared/services/records-in-matches.service';
import { Matches } from '../../../shared/models/matches';
import { FifaPlayerService } from '../../../shared/services/fifa-player.service';

@Component({
  selector: 'app-record-in-match',
  templateUrl: './record-in-match.component.html',
  styleUrls: ['./record-in-match.component.scss']
})
export class RecordInMatchComponent implements OnInit {
  private readonly searchSubject = new Subject<string | undefined>();
  public newRecordForm: FormGroup;
  public match: Matches;
  public recordTypes = ['G','Penalty','YC', 'RC', 'OG'];
  public teamNames: string[];
  public playerList: FifaPlayerModelDB[];
  
  constructor(private playerService: FifaPlayerService, private recordsInMatchesService: RecordsInMatchesService, @Inject(MAT_DIALOG_DATA) data, private formBuilder: FormBuilder) {
    this.match = data['match'];
    this.teamNames = [this.match.hometeam, this.match.awayteam];

    this.newRecordForm = this.formBuilder.group({
      playerName: new FormControl('', [Validators.required, this.existingPlayerValidator()]),
      selectedTeamName: new FormControl(this.match.hometeam, Validators.required),
      selectedRecordType: new FormControl('G', Validators.required),
      numericDetail: new FormControl(1),
      formatType: new FormControl('with_minutes', Validators.required)
    });
  }
 // licenseNo: new FormControl('', condition ? Validators.required : [])
  public ngOnInit(): void {
    // add to facade?
    this.searchSubject
      .pipe(
        filter(searchQuery => searchQuery.length > 2),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((searchQuery) => this.playerService.findPlayersByName(searchQuery))
      )
      .subscribe((results) => {
        this.playerList = results;
      });
  }

  public saveRecordV2(): void {
    const newRecordInMatch: RecordsInMatchesModel = {
      matchId: this.match.id,
      playerId: this.playerList?.find(player => player.playerName === this.newRecordForm.get('playerName').value).id,
      minuteOfRecord: this.getMinuteOfRecordByFormatType(),
      typeOfRecord: this.newRecordForm.get('selectedRecordType').value,
      playerTeamId: this.getPlayerTeamId(),
      teamRecordId: this.getTeamIdByTeamName(this.newRecordForm.get('selectedTeamName').value)
    }
    this.recordsInMatchesService.saveNewRecordInMatch(newRecordInMatch).subscribe();
  }


  getMinuteOfRecordByFormatType(): number | null {
    if (this.newRecordForm.get('formatType').value === 'with_minutes') {
      return this.newRecordForm.get('numericDetail').value;
    } else {
      return null;
    }
  }

  private getTeamIdByTeamName(teamName: string): number {
    if (teamName === this.match.hometeam) {
      return this.match.idHomeTeam;
    } else {
      return this.match.idAwayTeam;
    }
  }

  private getPlayerTeamId(): number {
    if (this.newRecordForm.get('selectedRecordType').value !== 'OG') {
      return this.getTeamIdByTeamName(this.newRecordForm.get('selectedTeamName').value);
    } else {
      const otherTeamName = this.teamNames.find(teamName => teamName !== this.newRecordForm.get('selectedTeamName').value);
      return this.getTeamIdByTeamName(otherTeamName);
    }
  }

  public onSearchQueryInput(): void {
    this.searchSubject.next(this.newRecordForm.get('playerName').value.trim());
  }

  existingPlayerValidator(): ValidatorFn {
    return (): ValidationErrors | null => {
      if (this.playerList?.length > 0 && this.isExistingPlayerSelected()) {
        return null;
      } else {
        return {incorrect: {value: "Is having custom error"}};
      }
    };
  }

  private isExistingPlayerSelected(): boolean {
    const playerNames = this.playerList.map(player => player.playerName);
    if (!playerNames.includes(this.newRecordForm.get('playerName').value)) {
      return false;
    } else {
      return true;
    }
  }
}
