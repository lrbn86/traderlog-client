import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTradeComponent } from './components/add-trade/add-trade.component';
import { TradesListComponent } from './components/trades-list/trades-list.component';

const routes: Routes = [
  { path: 'trades', component: TradesListComponent },
  { path: 'add-trade', component: AddTradeComponent },
  { path: '', redirectTo: 'trades', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
