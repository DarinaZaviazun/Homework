import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyComponent } from './components/currency/currency.component';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
