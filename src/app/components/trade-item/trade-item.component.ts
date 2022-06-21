import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trade } from 'src/app/Trade';

@Component({
  selector: 'app-trade-item',
  templateUrl: './trade-item.component.html',
  styleUrls: ['./trade-item.component.css']
})
export class TradeItemComponent implements OnInit {

  @Input() tradeItem!: Trade;
  @Output() deleteItemEvent: EventEmitter<Trade> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteTradeItem(trade: Trade): void {
    this.deleteItemEvent.emit(trade);
  }

}
