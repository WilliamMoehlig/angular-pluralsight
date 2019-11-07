import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IProduct } from './product';

// Inject in root (provider doesn't have to be defined)
/* @Injectable({
  providedIn: 'root'
}) */

@Injectable()
export class ProductService {
  private productUrl = 'api/products/products.json';
  private errorMessage: string = '';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(catchError(this.handleError));
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(map((products: IProduct[]) => products.find(p => p.productId === id)));
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      this.errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(this.errorMessage);
    return throwError(this.errorMessage);
  }
}
