import { Component, OnInit } from '@angular/core';
import { Stock, stocks } from '../mock-trades';

@Component({
  selector: 'app-trades-list',
  templateUrl: './trades-list.component.html',
  styleUrls: ['./trades-list.component.css']
})
export class TradesListComponent implements OnInit {

  stocks: Stock[] = stocks;

  constructor() { }

  ngOnInit(): void {
  }

  addTrade(stock: Stock): void {}
  getTrades() {}
  updateTrade(stock: Stock): void {}
  deleteTrade(stock: Stock): void {}

}
