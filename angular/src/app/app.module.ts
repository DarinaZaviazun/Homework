import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CarsComponent } from './components/main/cars/cars.component';
import { CreateComponent } from './components/main/create/create.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', redirectTo: 'cars', pathMatch: 'full'},
      {path: 'cars', component: CarsComponent},
      {path: 'create', component: CreateComponent}
    ]
  }
];



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarsComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
