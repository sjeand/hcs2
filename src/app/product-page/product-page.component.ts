import { Component, inject, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductNavbarComponent } from '../product-navbar/product-navbar.component';
import { Product } from '../model/product';
import { NgFor, NgIf } from '@angular/common';
import { ProductService } from '../services/product.service';
import { PageHeadingComponent } from "../page-heading/page-heading.component";
import { ActivatedRoute } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'product-page',
  standalone: true,
  imports: [ProductCardComponent, ProductNavbarComponent, NgFor, PageHeadingComponent, NgIf, ConfirmationDialogComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  products: Product[] = [];
  filterType: string = 'all';
  searchText: string | null = '';
  private route = inject(ActivatedRoute);
  deleteMessage: string = '';
  productToDelete: Product | null = null;
  searchInformationText = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.searchText = this.route.snapshot.paramMap.get('searchText');
    this.fetchProducts();
  }
  async fetchProducts() {
    const products = await this.productService.getProducts(this.filterType, this.searchText);
    products?.sort((a: Product, b: Product) => a.maker.localeCompare(b.maker));
    this.products = products as Product[];
    if (this.searchText && this.searchText.length > 0) {
      this.searchInformationText = `Search results for "${this.searchText}"`;
    }
    else if (this.filterType && this.filterType.length > 0) {
      this.createSearchInformationTextForFilter();
    }
    else {
      this.searchInformationText = '';
    }
  }

  createSearchInformationTextForFilter() {
    if(this.filterType === 'all') {
      this.searchInformationText = 'Showing all products';
      return;
    }
    let filterName = '';
    switch (this.filterType) {
      case 'handgun':
        filterName = 'handguns';
        break;
      case 'rifle':
        filterName = 'rifles';
        break;
      case 'shotgun':
        filterName = 'shotguns';
        break;
      default:
        this.searchInformationText = '';
        return;
    }
    this.searchInformationText = `Showing all ${filterName}`;
  }

  onFilterClicked(filterType: string) {
    this.filterType = filterType;
    this.searchText = null;
    this.fetchProducts();
  };

  async handleDeleteClick(product: Product) {
    this.productToDelete = product;
    this.deleteMessage = `Are you sure you want to delete the "${product?.maker} ${product.model}" product?`;
  };

  async deleteProduct(confirmed: boolean) {
    if (!confirmed) {
      this.productToDelete = null;
      return;
    }
    await this.productService.deleteProduct(this.productToDelete!.id!);
    this.productToDelete = null;
    this.fetchProducts();
  };
}

