import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../interfaces/post-interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  post: IPost;
  constructor() { }
  ngOnInit(): void {
  }

}
