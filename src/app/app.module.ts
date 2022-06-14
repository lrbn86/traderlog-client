import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerformanceStatsComponent } from './performance-stats/performance-stats.component';
import { TradesListComponent } from './trades-list/trades-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PerformanceStatsComponent,
    TradesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
