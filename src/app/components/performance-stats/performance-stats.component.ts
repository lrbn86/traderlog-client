import { Component, OnInit } from '@angular/core';
import { TradeService } from 'src/app/services/trade.service';

@Component({
  selector: 'app-performance-stats',
  templateUrl: './performance-stats.component.html',
  styleUrls: ['./performance-stats.component.css']
})
export class PerformanceStatsComponent implements OnInit {

  public numWinnerTrades: number = 0;
  public numLoserTrades: number = 0;
  public numTotalTrades: number = this.numWinnerTrades + this.numLoserTrades;
  public winrate: number = Math.round((this.numWinnerTrades / this.numTotalTrades) * 100) || 0;

  constructor(private tradeService: TradeService) { }

  ngOnInit(): void {
    this.tradeService.getTrades().subscribe((trades) => {
      this.numWinnerTrades = trades.filter((trade) => trade.status === 'WIN').length;
      this.numLoserTrades = trades.filter((trade) => trade.status === 'LOSE').length;
      this.numTotalTrades = trades.length;
      this.winrate = Math.round((this.numWinnerTrades / this.numTotalTrades) * 100) || 0;
    });
  }

}
