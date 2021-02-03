import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './users/users.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'auth/login', pathMatch: 'full' },
      {path: 'auth/login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
      {path: 'auth/register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
      {path: 'main/users', component: UsersComponent}
    ])
  ],
  providers: [
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
