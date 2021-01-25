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
  carCh: any;
  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.id = value.id;
      this.carCh = cars.filter(value1 => value1.id == this.id);
    });

  }

}
