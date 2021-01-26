import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostService} from './services/post.service';
import {IPost} from './interfaces/post-interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  private posts: IPost[];
  post: IPost;
constructor(private postService: PostService) {
}
  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }
  getBubblePost(post): void{
  this.post = post;
  }
}
