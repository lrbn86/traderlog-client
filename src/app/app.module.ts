import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerformanceStatsComponent } from './components/performance-stats/performance-stats.component';
import { TradesListComponent } from './components/trades-list/trades-list.component';
import { AddTradeComponent } from './components/add-trade/add-trade.component';

@NgModule({
  declarations: [
    AppComponent,
    PerformanceStatsComponent,
    TradesListComponent,
    AddTradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
