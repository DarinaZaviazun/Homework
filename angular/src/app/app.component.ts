import { Component } from '@angular/core';
import {DataService} from './services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public dataService: DataService) {
  }
  increment(): void{
    this.dataService.changeCounter();
  }
}
