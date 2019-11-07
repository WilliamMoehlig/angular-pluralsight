import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

@Component({
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css'],
})
export class ProductsDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor() {}

  ngOnInit() {}
}
