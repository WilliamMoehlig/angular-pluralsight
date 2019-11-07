import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './products.service';

@Component({
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css'],
  providers: [ProductService],
})
export class ProductsDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const productId = +param;
      this.getProduct(productId);
    }
  }

  private getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => (this.product = product),
      error: err => (this.errorMessage = err),
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
