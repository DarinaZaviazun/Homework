import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { FullPostComponent } from './components/full-post/full-post.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {PostResoleService} from './services/post-resole.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    FullPostComponent,
    HomeComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
          {path: 'home', component: HomeComponent},
          {path: 'posts', component: PostsComponent, resolve: {postsData : PostResoleService},
          children: [{path: ':id', component: FullPostComponent}]}
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
