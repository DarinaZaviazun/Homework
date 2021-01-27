import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {UserResolveService} from './services/user-resolve.service';
import {PostResolveService} from './services/post-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    PostsComponent,
    PostComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: UsersComponent, resolve: {UserData: UserResolveService},
        children: [{path: ':id', component: UserDetailComponent}]},
      {path: 'posts', component: PostsComponent, resolve: {PostData: PostResolveService},
      children: [{path: ':id', component: PostDetailComponent}]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
