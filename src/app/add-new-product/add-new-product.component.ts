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
  
  async addNewProduct() {
    let image = this.productForm?.value.image;
    if (!!image){
      if(typeof image === 'object'){
        image = image.path;
      } else{
        image = image.split('\\').pop();
      }
    }
      
    const product = {
      ...this.productForm?.value,
      image
    }
    const { error } = await this.supabase
      .from('products')
      .insert(product);
    if (!error) {
      this.toastMessage = `New product "${product.maker} ${product.model}" was added`;
      this.productForm?.reset(); // Reset the form
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 5000);
    } else {
      console.error('Error inserting product:', error);
    }
  }
  async onImageChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    const imageFile = input.files?.[0];
    if(!imageFile) return;
    const { data, error } = await this.productService.uploadImage(imageFile);
    let image = data;
    if(error) {
      if((error as any)?.statusCode == 409){
        image = {path: imageFile.name, id: '', fullPath: imageFile.name};
      }
      else {
        console.error('Error uploading image:', error);
        return;
      }
    }
    this.productForm?.patchValue({ image });

  }
}