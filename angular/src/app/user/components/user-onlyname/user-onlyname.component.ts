import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/user-interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-onlyname',
  templateUrl: './user-onlyname.component.html',
  styleUrls: ['./user-onlyname.component.css']
})
export class UserOnlynameComponent implements OnInit {
  @Input() user: IUser;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  goToUser(): void {
    this.router.navigate([this.user.id],{
      relativeTo: this.activatedRoute,
      state: this.user
    });
  }
  goToPost(): void{

  }
}
