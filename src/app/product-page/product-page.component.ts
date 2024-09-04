import { Component } from '@angular/core';
import { PageHeadingComponent } from '../page-heading/page-heading.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductNavbarComponent } from '../product-navbar/product-navbar.component';
import { Product } from '../model/product';
import { NgFor } from '@angular/common';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'product-page',
  standalone: true,
  imports: [PageHeadingComponent, ProductCardComponent, ProductNavbarComponent, NgFor],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  products: Product[]= [];

  constructor(productService: ProductService){
    productService.getProducts().subscribe((products: Product[]) => {
      this.products= products
    })
  }
  
}

