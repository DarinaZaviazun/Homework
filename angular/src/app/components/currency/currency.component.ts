import { Component, OnInit } from '@angular/core';
import {CurrencyGetService} from '../../services';
import {ICurrency} from '../../interfaces';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currencies: ICurrency[];
  dateInit = new Date();
  date: string;
  constructor(private currencyGetService: CurrencyGetService, private datePipe: DatePipe) {
  }
  ngOnInit(): void {
    this.date = this.datePipe.transform(this.dateInit, 'yyyyMMdd');
    this.currencyGetService.getCurrentCurrency(this.date).subscribe(value => this.currencies = value);
  }
  getPrevious(): void {
    this.dateInit = new Date(this.dateInit.setDate(this.dateInit.getDate() - 1));
    this.currencyGetService.getPreviousCurrency(this.datePipe.transform(this.dateInit, 'yyyyMMdd')).subscribe(
      value => this.currencies = value);
  }
}
