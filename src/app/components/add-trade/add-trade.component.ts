import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void {
    const newTradeItem = f.value;
  }

}
