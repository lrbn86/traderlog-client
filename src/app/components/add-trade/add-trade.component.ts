import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TradeService } from 'src/app/services/trade.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-trade',
  templateUrl: './add-trade.component.html',
  styleUrls: ['./add-trade.component.css']
})
export class AddTradeComponent implements OnInit {

  status!: string;
  date!: string;
  symbol!: string;
  entry!: number;
  exit!: number;
  size!: number;
  side!: string;

  constructor(private tradeService: TradeService, private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void {
    const newTradeItem = f.value;
    this.tradeService.addTrade(newTradeItem).subscribe();
    alert('Trade added!');
    this.location.back();
  }

}
