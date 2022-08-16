import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from '../../../../Interfaces/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';





@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent implements OnInit {

  containerTable: Table[] = [
    {container: '#-1034', origin: 'Miami', destination: 'New York', status: 'IN YARD', description: 'Container 1', dimensions: '20 Feet', book: true},
    {container: '#-3424', origin: 'New York', destination: 'Miami', status: 'UNLOAD FROM VESSEL', description: 'Container 3', dimensions: '33 Feet', book: true},
    {container: '#-4533', origin: 'Orlando', destination: 'Miami', status: 'GATE OUT', description: 'Container 5', dimensions: '30 Feet', book: true},
    {container: '#-5334', origin: 'Miami', destination: 'San Agustin', status: 'GATE OUT', description: 'Container 6', dimensions: '25 Feet', book: true},
    {container: '#-6453', origin: 'Miami', destination: 'Los Angeles', status: 'GATE OUT', description: 'Container 7', dimensions: '31 Feet', book: true},
    {container: '#-6453', origin: 'Miami', destination: 'Los Angeles', status: 'GATE OUT', description: 'Container 7', dimensions: '31 Feet', book: true},
    {container: '#-6453', origin: 'Miami', destination: 'Los Angeles', status: 'GATE OUT', description: 'Container 7', dimensions: '31 Feet', book: true},
    {container: '#-6453', origin: 'Miami', destination: 'Los Angeles', status: 'GATE OUT', description: 'Container 7', dimensions: '31 Feet', book: true},
    {container: '#-6453', origin: 'Miami', destination: 'Los Angeles', status: 'GATE OUT', description: 'Container 7', dimensions: '31 Feet', book: true},
  ];

  displayedColumns: string[] = ['container', 'origin', 'destination', 'status', 'description', 'dimensions', 'book'];
  dataSource = new MatTableDataSource(this.containerTable);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('sort') sort!: MatSort;

  
  constructor() { }

  ngOnInit(): void {
    this.ngAfterViewInit()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
