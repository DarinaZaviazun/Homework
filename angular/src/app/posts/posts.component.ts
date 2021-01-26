import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../interfaces/post-interface';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  post: IPost;
  posts: IPost[];
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => this.postService.
    getPosts(value.id).subscribe(value1 => this.posts = value1));
  }
}
