import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsService} from '../../services';
import {IProduct} from '../../interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[];
  constructor(private productService: ProductsService) {
    this.productService.getproducts().subscribe(value => this.products = value);
  }

  ngOnInit(): void {
  }

}
