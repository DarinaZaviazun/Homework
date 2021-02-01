import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';
import {IPost} from '../../interfaces/post';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: IUser;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value =>
      this.user = this.router.getCurrentNavigation().extras.state as IUser);
  }

  ngOnInit(): void {
  }

}
