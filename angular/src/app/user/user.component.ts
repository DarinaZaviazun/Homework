import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IUser} from '../../interfaces/user-interface';
import {PostService} from '../../services/post.service';
import {IPost} from '../../interfaces/post-interface';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  posts: IPost[];
  @Input()
  user: IUser;
  @Output()
  bubblePost = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
