import { Component, OnInit } from '@angular/core';
import { Table } from '../../../../Interfaces/table';
import { MatTableDataSource } from '@angular/material/table';



const containerTable: Table[] = [
  {container: '#1034', origin: 'Miami', destination: 'New York', status: 'IN YARD', description: 'Container 1', dimensions: '20 Feet', book: true},
  {container: '#1034', origin: 'Miami', destination: 'New York', status: 'IN YARD', description: 'Container 1', dimensions: '20 Feet', book: true},
  {container: '#1034', origin: 'Miami', destination: 'New York', status: 'IN YARD', description: 'Container 1', dimensions: '20 Feet', book: true},
  {container: '#1034', origin: 'Miami', destination: 'New York', status: 'IN YARD', description: 'Container 1', dimensions: '20 Feet', book: true},
  {container: '#1034', origin: 'Miami', destination: 'New York', status: 'IN YARD', description: 'Container 1', dimensions: '20 Feet', book: true},
  {container: '#1034', origin: 'Miami', destination: 'New York', status: 'IN YARD', description: 'Container 1', dimensions: '20 Feet', book: true},
];

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent implements OnInit {

  displayedColumns: string[] = ['container', 'origin', 'destination', 'status', 'description', 'dimensions', 'book'];
  dataSource = new MatTableDataSource(containerTable);

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
