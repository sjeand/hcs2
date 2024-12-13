import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-info',
  standalone: true,
  imports: [CurrencyPipe, AsyncPipe],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent {
productImage: any;
product: Product |null = null;

  constructor(public activatedRoute: ActivatedRoute, private productService: ProductService) {}

  async ngOnInit() {
     this.activatedRoute.paramMap
      .pipe(map(() => window.history.state)).subscribe(prod => {
        this.product = prod;
        this.initImage();
      });

      
    
  }
  async initImage(){
    const data = await this.productService.getProductImage(this.product?.image);
      if(!data) return;
      this.productImage = data.publicUrl;
  }
}
