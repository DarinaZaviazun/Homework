import { Component, OnInit } from '@angular/core';
import {ICar} from '../interfaces/car-interface';
import {cars} from '../database/carDB';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() { }
  cars = cars;
  ngOnInit(): void {
  }

}
