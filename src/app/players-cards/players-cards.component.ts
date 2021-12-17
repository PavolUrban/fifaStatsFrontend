import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';

@Component({
  selector: 'app-players-cards',
  templateUrl: './players-cards.component.html',
  styleUrls: ['./players-cards.component.scss']
})
export class PlayersCardsComponent implements OnInit {
  
  @ViewChild(MatPaginator, { static: true }) paginator : MatPaginator;
  @ViewChild(MatSort, { static: true }) sort : MatSort;

  @Input() data;
  @Input() displayedColumns: string[];
  dataSource;  




  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.dataSource.filterPredicate = ( data, filterValue: string) =>{
        return data.name.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(filterValue) !== -1;
      }
      
    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

}
