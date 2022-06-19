import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Trade } from '../Trade';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  private API_URL = 'http://localhost:5000/trades';

  constructor(private http: HttpClient) { }

  getTrades(): Observable<Trade[]> {
    return this.http.get<Trade[]>(this.API_URL);
  }

  deleteTrade(trade: Trade): Observable<Trade[]> {
    const url = `${this.API_URL}/${trade.id}`;
    return this.http.delete<Trade[]>(url);
  }
}
