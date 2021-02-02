import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'auth/login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
      {path: 'auth/register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)}
    ])
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
