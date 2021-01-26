import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from '../interfaces/post-interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;
  @Output()
  bubblePost = new EventEmitter<IPost>();
  constructor() { }

  ngOnInit(): void {
  }
  showPost(post): void{
    this.bubblePost.emit(post);
  }
}
