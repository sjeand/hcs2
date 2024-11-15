import { Component, inject, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductNavbarComponent } from '../product-navbar/product-navbar.component';
import { Product } from '../model/product';
import { NgFor, NgIf } from '@angular/common';
import { ProductService } from '../services/product.service';
import { PageHeadingComponent } from "../page-heading/page-heading.component";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'product-page',
  standalone: true,
  imports: [ProductCardComponent, ProductNavbarComponent, NgFor, PageHeadingComponent, NgIf],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  products: Product[] = [];
  filterType: string = 'all';
  searchText: string | null = '';
  private route = inject(ActivatedRoute)

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.searchText = this.route.snapshot.paramMap.get('searchText');
    this.fetchProducts();
  }
  async fetchProducts() {
    const products = await this.productService.getProducts(this.filterType, this.searchText);
    this.products = products as Product[];
  }

  onFilterClicked(filterType: string) {
    this.filterType = filterType;
    //sessionStorage.setItem("productFilterType", filterType);
    this.fetchProducts();
  };
}

