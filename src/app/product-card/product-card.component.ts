import { Input, Component } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyPipe, NgIf } from '@angular/common';
import { ProductService } from '../services/product.service';
import { RouterLink } from '@angular/router';
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

}
