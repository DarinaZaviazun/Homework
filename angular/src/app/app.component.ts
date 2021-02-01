import { Component } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {cars} from './database/carDB';
import {ICar} from './interfaces/car-interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
//
// user = {name: 'Pashka', age: 29};
//
//   checkForm(myForm: NgForm): void {
//     console.log(myForm);
//   }
//
//   name = new FormControl('',
//     [Validators.required, Validators.minLength(5)]);
//   age = new FormControl(null ,
//     [Validators.required, Validators.pattern('[0-9]+')]);
//   myForm = new FormGroup({
//     name: this.name,
//     age: this.age
//   });
//   action(): void {
//     console.log(this.myForm);
//   }

  model = new FormControl('', [
    Validators.required,
    Validators.minLength(1)
  ]);
  year = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{4}')
  ]);
  horsepower = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{1,4}')
  ]);
  color = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  owner = new FormControl('', [
    Validators.required,
    Validators.pattern('(true)|(false)')
  ]);
  carForm = new FormGroup({
    model: this.model,
    year: this.year,
    horsepower: this.horsepower,
    color: this.color,
    owner: this.owner
    }
  );
  cars = cars;
  car: ICar;
  action(): void {
    this.car = this.carForm.value;
    cars.push(this.car);
  }
}
