import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-winners-list',
  templateUrl: './winners-list.component.html',
  styleUrls: ['./winners-list.component.scss']
})
export class WinnersListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator : MatPaginator;
  @ViewChild(MatSort, { static: true }) sort : MatSort;
  @ViewChild('tabGroup') tabGroup;

  displayedColumns: string[] = ['season','player','teamname','runnerUp'];
  dataSource ;

  constructor(private generalService: GeneralService, private router: Router) { }

  ngOnInit(): void {
    this.generalService.getWinnersList('CL').subscribe(data=>{
      this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(data)));
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

  }

//todo move this function to some service - it is duplicate
  goToTeamView(teamname)
  {
    // todo call service to get team info
    this.router.navigate(['/teaminfo/'+teamname]);
  }

  tabChanged (tabChangeEvent: MatTabChangeEvent): void {
    let competitionName = this.getCompetitionName();

    this.generalService.getWinnersList(competitionName).subscribe(data=>{
      this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(data)));
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  goToSeasonView(season: string){
    this.router.navigate(['/season/'+season+"/"+this.getCompetitionName()]);
  }


  getCompetitionName(): string {
    let competitionName;
    if(this.tabGroup.selectedIndex === 0){
      competitionName = "CL";
    } else {
      competitionName = "EL";
    }
    
    return competitionName;
  }
}
