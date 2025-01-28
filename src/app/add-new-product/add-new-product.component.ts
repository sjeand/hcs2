import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ToastMessageComponent } from "../toast-message/toast-message.component";

@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, ToastMessageComponent, NgFor, NgIf],
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.scss'
})
export class AddNewProductComponent {


  private supabase: SupabaseClient;
  productForm: FormGroup | undefined;
  showToast = false;
  toastMessage = "";
  typeOptions: { id: string; singularLabel: string; subtypes: { id: string; label: string; }[]; }[] = [];
  subtypeOptions: { id: string; label: string; }[] = [];

  constructor(private fb: FormBuilder, private router: Router,
    private productService: ProductService,

  ) {
    this.typeOptions = this.productService.getTypes();
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
    this.productForm = this.fb.group({
      maker: ['', [Validators.required]],
      model: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      type: ['', [Validators.required]],
      subtype: ['', [Validators.required]],
      image: [null, []]
    });
    this.productForm.get('type')?.valueChanges.subscribe((type) => {
      this.subtypeOptions = this.typeOptions.find(option => option.id === type)?.subtypes || [];
    });
  };
  stripPath(path: string) {
    return path.split('\\').pop() || '';
  }
  async addNewProduct() {
    const product ={
      ...this.productForm?.value,
      image: this.stripPath(this.productForm?.value.image)
    }
    const { error } = await this.supabase
      .from('products')
      .insert(this.productForm?.value)
    if (!error) {
      this.toastMessage = `New product "${this.productForm?.value.nmaker}${this.productForm?.value.model}" was added`;
      this.productForm?.reset(); // Reset the form
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    } else {
      console.error('Error inserting product:', error);
    }
  }
  async onImageChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    const imageFile = input.files?.[0];
    const bucket = 'product_images';
    const { data, error } = await this.supabase
      .storage
      .from(bucket)
      .upload(imageFile?.name!, imageFile!, {
        cacheControl: '3600',
        upsert: false
      })
  }
}