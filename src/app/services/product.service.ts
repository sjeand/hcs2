import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Product, ProductUpload } from '../model/product';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /* constructor(private httpClient: HttpClient ) {} */

  getProducts(): Observable<Product[]> {
/*     return this.httpClient.get<Product[]>('/product-list').pipe(map((obj: any) => obj.products));
 */
    return of([{
      maker: "Glock",
      model: "ABC",
      price: 2
    }])
  }

  createProduct(product: ProductUpload) {
   /*  this.httpClient.post<ProductUpload>("/products", product); */
  }
}
