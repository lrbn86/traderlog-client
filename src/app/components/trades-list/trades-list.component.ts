import { Component, OnInit } from '@angular/core';
import { TradeService } from 'src/app/services/trade.service';
import { Trade } from 'src/app/Trade';

@Component({
  selector: 'app-trades-list',
  templateUrl: './trades-list.component.html',
  styleUrls: ['./trades-list.component.css']
})
export class TradesListComponent implements OnInit {

  trades: Trade[] = [];

  constructor(private tradeService: TradeService) { }

  ngOnInit(): void {
    this.tradeService.getTrades().subscribe((trades) => this.trades = trades);
  }

  getTrades() {}

}
