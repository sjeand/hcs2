import { Input, Component } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
 @Input() product!:Product;
 productImage = "";

 constructor(private productService: ProductService) {
    
 }
 async ngOnInit(): Promise<void> {
  const data = await this.productService.getProductImage(this.product.image);
  if(!data) return;
  this.productImage = data.publicUrl;

}

}
