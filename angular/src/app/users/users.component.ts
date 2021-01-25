import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interfaces/user-interface';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../services/user.service';
import {IPost} from '../../interfaces/post-interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];
  constructor(private userService: UserService) { }
  private posts: IPost[];
  post: IPost;
  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }
  getBubblePost(posts): void{
    this.posts = posts;
  }
}
