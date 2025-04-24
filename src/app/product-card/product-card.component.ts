import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyPipe, NgIf } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, NgIf],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
  productImage = "";
  isAdmin: boolean = false;
  private supabase: SupabaseClient;
  @Output() deleteClicked = new EventEmitter<Product>();

  constructor(private productService: ProductService) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }
  async ngOnInit(): Promise<void> {
    const data = await this.productService.getProductImage(this.product.image);
    if (!data) return;
    this.productImage = data.publicUrl;
    await this.checkAdmin();
  }

  async checkAdmin() {
    const { data: { user } } = await this.supabase.auth.getUser();
    if (user) { 
      this.isAdmin = true;
    }
  }
  
  //[routerLink]="['edit-product', product.id]"
  onEditClick(event: MouseEvent) {
    event.stopPropagation();
  }

  async onDeleteClick(event: MouseEvent) {
   
    // await this.productService.deleteProduct(this.product.id!);
    // this.router.navigate(['/product-page']);
    event.stopPropagation();
    this.deleteClicked.emit(this.product);
  }
  

}
