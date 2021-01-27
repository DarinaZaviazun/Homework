import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interfaces/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: IUser;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => this.user = history.state);
  }

  ngOnInit(): void {
  }

}
