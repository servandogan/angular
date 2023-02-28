import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})

export class PaginatorComponent implements AfterViewInit {
  @Input() passengerByAirlineId!: [];

  dataSource = new MatTableDataSource(this.passengerByAirlineId);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    console.log(this.passengerByAirlineId.length)
    this.dataSource.data = this.passengerByAirlineId
    this.dataSource.paginator = this.paginator;
    console.log(this.passengerByAirlineId.length)
    this.paginator.length = this.passengerByAirlineId.length;
  }
}
