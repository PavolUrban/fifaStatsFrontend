import { Component, Input, OnInit, ViewChild } from '@angular/core';
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


  displayedColumns: string[] = ['season','player','teamname'];
  // clw.setPlayerName(pc.whoIsWinnerOfMatch(match, "Pavol Jay", "Kotlik"));
  // clw.setSeason(match.getSeason());
  // clw.setTeamName(match.getWinner());
  // clw.setTeamLogo(fileRepository.findByTeamname(match.getWinner()));
  dataSource ;



  constructor(private generalService: GeneralService, private router: Router) { }

  ngOnInit(): void {

        
    this.generalService.getWinnersList('CL').subscribe(data=>{
      this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(data))); //JSON.parse(JSON.stringify(data['matches'].slice(0, 6)))
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
    
    let competitionName: string;

    if(tabChangeEvent.tab.textLabel === 'Champions league'){
      competitionName = "CL";
    } else {
      competitionName = "EL";
    }
      
    this.generalService.getWinnersList(competitionName).subscribe(data=>{
      this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(data))); //JSON.parse(JSON.stringify(data['matches'].slice(0, 6)))
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
