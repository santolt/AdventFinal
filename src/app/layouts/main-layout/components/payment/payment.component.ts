import { Component, OnInit } from '@angular/core';
import { MyCard } from '../../../../Interfaces/myCard';


const ELEMENT_DATA: MyCard[] = [
  {issuesBy: 'AICT', qty: '2', fee: 12500, total: 25000},
  {issuesBy: 'AICT', qty: '4', fee: 13000, total: 60000},
  {issuesBy: 'AICT', qty: '5', fee: 10500, total: 55000},


];

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  total: number = 100000;

  displayedColumns: string[] = ['issuesBy', 'qty', 'fee', 'total', 'acciones'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<MyCard>();

  constructor() { }

  ngOnInit(): void {
  }

}
