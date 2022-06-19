import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-stats',
  templateUrl: './performance-stats.component.html',
  styleUrls: ['./performance-stats.component.css']
})
export class PerformanceStatsComponent implements OnInit {

  public numWinnerTrades: number = 250;
  public numLoserTrades: number = 30;
  public numTotalTrades: number = this.numWinnerTrades + this.numLoserTrades;
  public winrate: number = Math.round((this.numWinnerTrades / this.numTotalTrades) * 100);

  constructor() { }

  ngOnInit(): void {
  }

}
