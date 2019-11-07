import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products-list.components.html',
  styleUrls: ['./products-list.component.css'],

  // inject service that is not in root
  providers: [ProductService],
})
export class ProductsListComponent implements OnInit {
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => {
        this.errorMessage = err;
      },
    });
  }

  constructor(private productService: ProductService) {}

  products: IProduct[] = [];

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  filteredProducts: IProduct[];
  errorMessage: string;

  showImage: boolean = false;
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1,
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product List: ${message}`;
  }
}
