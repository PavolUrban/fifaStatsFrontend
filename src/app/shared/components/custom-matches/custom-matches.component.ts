import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { Matches } from '../../models/matches';
import { Observable } from 'rxjs';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatchDetailComponent } from '../match-detail/match-detail.component';
import { Teams } from '../../models/teams';
import { Router } from '@angular/router';
import { MatchesService } from '../../services/matches.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { RecordInMatchComponent } from '../../../components/matches-view/record-in-match/record-in-match.component';
import { CreateMatchComponent } from 'src/app/components/matches-view/create-match/create-match.component';

@Component({
  selector: 'app-custom-matches',
  templateUrl: './custom-matches.component.html',
  styleUrls: ['./custom-matches.component.scss']
})
export class CustomMatchesComponent implements OnInit {

  // TOdo this will go soon away completely

  @Input() currentTeam: string = null;
  @Input() dataSourceNew = [];
  @Input() matCardSubtitle: string;
  @Input() matCardTitle: string;
  @Input() initPageSize: number = 5;

  @ViewChild(MatPaginator, { static: true }) paginator : MatPaginator;
  @ViewChild(MatSort, { static: true }) sort : MatSort;

  team : Teams;
  match: Matches = new Matches();
  matches: Observable<Matches[]>;
  displayedColumns: string[] = ['index','season','competition','phase', 'hometeam','score', 'awayteam','winnerBadge', 'matchDetail'];
  dataSource = new MatTableDataSource();
  
  private allCompetitionsLabel = 'All competitions';
  private allPhasesLabel = 'All phases';
  private championsLeagueLabel = 'CL';

  competitionsPhases = new Map([["CL", []], ["EL",[]], [this.allCompetitionsLabel, []]]);
 

  competitionsList = [this.allCompetitionsLabel, this.championsLeagueLabel, 'EL'];
  
  selectedCompetition = this.allCompetitionsLabel;
 
  selectedCompetitionPhase = this.allPhasesLabel;


  seasonsList = []
  selectedSeason = 'All seasons';

  dataPrepared = false;

  constructor(private dialog: MatDialog, private router: Router, private matchesService: MatchesService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.matchesService.getCompetitionPhasesAndSeasonList().subscribe(data=>{
      console.log("datasource new");
      console.log(this.dataSourceNew);
      this.setNewDataSource(this.dataSourceNew);
      this.competitionsPhases.set('CL', data['competitionsPhasesCL']);
      this.competitionsPhases.set('EL', data['competitionsPhasesEL']);
      this.competitionsPhases.set(this.allCompetitionsLabel, data['defaultCompetitionPhases']);
      this.seasonsList = data['seasonsList'];
      this.dataPrepared = true;
    });
  }

  openMatchDetail(match)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '750px';
    dialogConfig.minHeight = '600px';
    dialogConfig.data = {
      match: match
    };

    this.dialog.open(MatchDetailComponent, dialogConfig);
  }

  addMatchDetails(match)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.minWidth = '750px';
    dialogConfig.minHeight = '600px';
    dialogConfig.data = {
      match: match
    };

    this.dialog.open(RecordInMatchComponent, dialogConfig);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //todo move this function to some service - it is duplicate
  goToTeamView(teamname){
    this.router.navigate(['/teaminfo/'+teamname]) .then(() => {
      window.location.reload();
    });
  }

  goToSeasonView(season, competition){
    this.router.navigate(['/season/'+season+"/"+competition]);
  }

  editMatch(match){
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.minWidth = '750px';
    dialogConfig.minHeight = '600px';
    dialogConfig.data = {
      match: match
    };


    const dialogRef =  this.dialog.open(CreateMatchComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data =>{
      console.log("teraz zatvaram");
      let teamUpdated = data;
      if(teamUpdated == true){
        this.testSomethign();
        this._snackBar.openFromComponent(SnackBarComponent, {
          duration: 3000,
        });
      }
    });


  }

  testSomethign(){
    this.matchesService.getMatchesWithCustomFilters(this.selectedSeason, this.selectedCompetition, this.selectedCompetitionPhase, this.currentTeam).subscribe(data=>{
      this.setNewDataSource(data);
      console.log(data);
    });
  }



  setNewDataSource(dataSource){
    this.dataSource = new MatTableDataSource(dataSource);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
