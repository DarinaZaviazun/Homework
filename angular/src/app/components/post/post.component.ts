import { Component, OnInit } from '@angular/core';
import {PostsGettingService} from '../../services/posts-getting.service';
import {IPost} from '../../interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: IPost[];
  post: IPost;
  flagForButton = 0;

  constructor(private gettingPosts: PostsGettingService) {
  }
  ngOnInit(): void {
    this.gettingPosts.getPosts().subscribe(val => this.posts = val);
  }
  getfullpost(id): void {
    this.gettingPosts.setFlag(id);
    this.gettingPosts.getPost(id).subscribe(val => {
      this.post = val;
      this.flagForButton = this.gettingPosts.getFlag();
    });
  }
}
