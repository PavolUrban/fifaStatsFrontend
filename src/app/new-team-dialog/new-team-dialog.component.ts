import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Teams } from '../teams';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-new-team-dialog',
  templateUrl: './new-team-dialog.component.html',
  styleUrls: ['./new-team-dialog.component.scss']
})
export class NewTeamDialogComponent implements OnInit {

  insertNewRecord = true;
  teamNameBeforeUpdate: string;
  team : Teams = new Teams();
  uploadForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<NewTeamDialogComponent>,
              private teamsService : TeamsService, @Inject(MAT_DIALOG_DATA) data)
  {

    if(data)
    {
      this.team =  data.team;
      this.teamNameBeforeUpdate = this.team.teamName;
      this.insertNewRecord = false;
    }

  }

  ngOnInit() {
      this.uploadForm = this.formBuilder.group({
        profile: ['']
      });
  }

  save()
  {


    this.onSubmit();
    if(this.insertNewRecord == true)
    {
      // this.teamsService.createNewTeam("vymysleny").subscribe(data => console.log(data), error => console.log(error));
      // this.team = new Teams();
      this.dialogRef.close(true);
    }

    // else
    // {
    //   this.teamsService.updateTeam(this.teamNameBeforeUpdate, this.team).subscribe();
    //   this.team = new Teams();
    //   this.dialogRef.close();

    // }

  }


  close() {
      this.dialogRef.close();
  }


onFileSelect(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.uploadForm.get('profile').setValue(file);
  }
}

  onSubmit() {
    const formData = new FormData();
    formData.append('uploadfile', this.uploadForm.get('profile').value);

    this.teamsService.createNewTeam(this.team).subscribe( x=> { });

  }

}
