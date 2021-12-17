import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { TeamsService } from '../services/teams.service';
import { FormControl } from '@angular/forms';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileService } from '../services/file.service';


@Component({
  selector: 'app-generate-group-stage',
  templateUrl: './generate-group-stage.component.html',
  styleUrls: ['./generate-group-stage.component.scss']
})
export class GenerateGroupStageComponent implements OnInit {
  subscription: Subscription = new Subscription();
  homeTeamControl = new FormControl();

  myTeamsPool=[];
  connectedTo =[];


  allTeamsPoolForGroupStage = [];

  pots = ['1','2','3','4'];
  allGroupNames = ['A','B','C','D','E','F','G','H'];

  groupsPool = [];
  // GroupA = ['A']
  //GroupB = ['B'];

  allTeamsForGroupStageObject = {
    id: "allTeams",
    items: []
  }

  constructor(private teamsService: TeamsService, private fileService: FileService, private _snackBar: MatSnackBar) { 

    // todo - 4 pots - you can add 8 teams to each and groups can be filled from it
    // for(let i=0;i<this.pots.length;i++) {
    //   let singlePot = {
    //     id: this.pots[i],
    //     capacity: 8,
        
    //   }
    // }

    for(let i=0; i<this.allGroupNames.length ; i++) {
      let singleGroup = {
        id: this.allGroupNames[i],
        items: []
      }

      this.groupsPool.push(singleGroup);
    }

    for (let week of this.groupsPool) {
      this.connectedTo.push(week.id);
    };

    this.connectedTo.push(this.allTeamsForGroupStageObject.id);

    console.log(this.groupsPool);
    console.log(this.connectedTo);

  }




  completeTeamList: string[];
  filteredOptionsHomeTeam: Observable<string[]>;


  ngOnInit(): void {
    this.subscription = this.teamsService.getTeamNames().subscribe(data=>
      {
        this.completeTeamList = data as string[];
        //console.log(this.teamsList);
  
        this.filteredOptionsHomeTeam = this.homeTeamControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value, this.completeTeamList))
        );
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // if(event.container.data.length > 3){
      //   console.log("skupina je plna, nepresuvaj");
      // }
      // else{
        console.log("presuvam");
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
     // }


    }

    // console.log("z "+ event.previousIndex +" do "+ event.currentIndex);

  }


  private _filter(value: string, options): string[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }

  deleteTeam(){
    console.log("delete");
  }

  addTeamToPool() {
    var index = this.completeTeamList.indexOf(this.homeTeamControl.value);    
    if (index !== -1) {
        this.completeTeamList.splice(index, 1);
        this.getTeamLogo(this.homeTeamControl.value);
     
    }    

    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
      data:{
        message: "Team added"
      }
    });
  }

  removeTeam(teamName){
    console.log("TODO toto chcem mazat "+ teamName);
    // var index = this.allTeamsPoolForGroupStage.indexOf(teamName);    // <-- Not supported in <IE9
    // if (index !== -1) {
    //     this.allTeamsPoolForGroupStage.splice(index, 1);
    //     this.completeTeamList.push(teamName);
    //     console.log(" a vrat ho k zoznamu timov");
    //     //this.allTeams.push(this.homeTeamControl.value);
    //     //this.homeTeamControl.setValue('');
    // }   
  }


  getTeamLogo(teamname: string): void {    
    this.fileService.getSingleTeamLogo(teamname).subscribe(data=>{

      console.log(data);
      let itemObject = {
        teamName: this.homeTeamControl.value,
        src: data['logo']['pic'],
        country: data['country']
      }

      // this is workin this.groupsPool[0].items.push(this.homeTeamControl.value);
      this.allTeamsForGroupStageObject.items.push(itemObject);

      this.homeTeamControl.setValue('');
    });
  }

}