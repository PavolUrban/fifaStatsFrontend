import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerWithCardsModel } from '../../models/players-with-cards.model';
import { DialogOpenerService } from '../../services/dialog-opener.service';

@Component({
  selector: 'app-players-cards',
  templateUrl: './players-cards.component.html',
  styleUrls: ['./players-cards.component.scss']
})
export class PlayersCardsComponent {
  
  @ViewChild(MatPaginator, { static: true }) paginator : MatPaginator;
  @ViewChild(MatSort, { static: true }) sort : MatSort;

  @Input() displayedColumns: string[];
  @Input() set data(playersWithCards: PlayerWithCardsModel[]) {
    this.dataSource = new MatTableDataSource<PlayerWithCardsModel>(playersWithCards);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.dataSource.filterPredicate = (data, filterValue: string) => {
      return data.name.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(filterValue) !== -1;
    }
  };
  
  dataSource: MatTableDataSource<PlayerWithCardsModel>;  

  constructor(public dialogOpenerService: DialogOpenerService) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
}
