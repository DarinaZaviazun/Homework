import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {cars} from '../../data/database';
import {ICar} from '../interfaces/carInterface';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {
  cars = cars;
  id: number;
  carCh: ICar;
  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => this.id = value.id);
    console.log(this.id);

    const carCh = cars.filter(value => console.log(value.id === this.id));
  }

}
