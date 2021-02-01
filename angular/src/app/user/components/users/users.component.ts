import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interfaces/user-interface';
import {UserService} from '../../servies/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: IUser[];
  ngOnInit(): void {
    this.userService.getUsers().subscribe(m => this.users = m);
  }

}
