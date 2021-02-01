import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostOnlyTitleComponent } from './components/post-only-title/post-only-title.component';
import {UserService} from '../user/servies/user.service';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [PostsComponent, PostComponent, PostOnlyTitleComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostService]
})
export class PostModule { }
