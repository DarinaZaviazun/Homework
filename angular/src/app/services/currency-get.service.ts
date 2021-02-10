import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICurrency} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CurrencyGetService {
  url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=';
  constructor(private httpClient: HttpClient) {
  }
  getCurrentCurrency(date: string): Observable<ICurrency[]> {
    return this.httpClient.get<ICurrency[]>(this.url + date + '&json');
  }
  getPreviousCurrency(date: string): Observable<ICurrency[]> {
    return this.httpClient.get<ICurrency[]>(this.url + date + '&json');
  }
}
