import { Component, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductNavbarComponent } from '../product-navbar/product-navbar.component';
import { Product } from '../model/product';
import { NgFor } from '@angular/common';
import { ProductService } from '../services/product.service';
import { PageHeadingComponent } from "../page-heading/page-heading.component";


@Component({
  selector: 'product-page',
  standalone: true,
  imports: [ProductCardComponent, ProductNavbarComponent, NgFor, PageHeadingComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  products: Product[] = [];
  filterType: string = 'all';

  onFilterClicked(filterType: string) {
    this.filterType = filterType;
    this.fetchProducts();
  };


  constructor(private productService: ProductService) { }

  async fetchProducts() {
    const products = await this.productService.getProducts(this.filterType);
    this.products = products as Product[];
  }

  ngOnInit(): Promise<void> {
    return this.fetchProducts();
  }

}

