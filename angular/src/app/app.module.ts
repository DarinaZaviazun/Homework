import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {RouterModule} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CarInfoComponent } from './car-info/car-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    HomepageComponent,
    CarInfoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomepageComponent},
      {path: 'cars', component: CarsComponent, children: [{path: ':id', component: CarInfoComponent}]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
