import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {users} from '../../database/usersDB';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  name = new FormControl('', [
    Validators.required,
  ]);
  password = new FormControl('', [
    Validators.required,
  ]);
  registerForm = new FormGroup({
      name: this.name,
      password: this.password
    }
  );
  users = users;
  user: { name: string, password: string };
  checkUser: { name: string, password: string };
  flag: boolean;

  action(): void {
    console.log(this.registerForm);
    users.push(this.registerForm.value);
    this.router.navigateByUrl('/auth/login');
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
