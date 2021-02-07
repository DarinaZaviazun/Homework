import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './ components/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './ components/product/product.component';
import { CutDescriptionPipe } from './ components/pipes/cut-description.pipe';
import { GreenDirective } from './ components/directives/green.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    CutDescriptionPipe,
    GreenDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
