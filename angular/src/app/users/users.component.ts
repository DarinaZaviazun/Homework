import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../interfaces/user-interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  users: IUser[];
  ngOnInit(): void {
    this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users').subscribe(m => this.users = m);
  }

}
