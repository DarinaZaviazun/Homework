import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {users} from '../../database/usersDB';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = new FormControl('', [
    Validators.required,
  ]);
  password = new FormControl('', [
    Validators.required,
  ]);
  loginForm = new FormGroup({
      name: this.name,
      password: this.password
    }
  );
  users = users;
  user: { name: string, password: string };
  checkUser: { name: string, password: string };
  flag: boolean;

  action(): void {
    this.user = this.loginForm.value;
    this.checkUser = users.find(value => value.name === this.user.name && value.password === this.user.password);
    if (this.checkUser) { this.router.navigateByUrl('main/users'); }
    else {
      this.flag = true;
    }
  }

  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }
}
