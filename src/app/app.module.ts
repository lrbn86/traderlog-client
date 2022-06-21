import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PerformanceStatsComponent } from './components/performance-stats/performance-stats.component';
import { TradesListComponent } from './components/trades-list/trades-list.component';
import { AddTradeComponent } from './components/add-trade/add-trade.component';
import { TradeItemComponent } from './components/trade-item/trade-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PerformanceStatsComponent,
    TradesListComponent,
    AddTradeComponent,
    TradeItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
