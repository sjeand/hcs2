import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastMessageComponent } from "../toast-message/toast-message.component";

@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, ToastMessageComponent, NgFor, NgIf],
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.scss'
})
export class AddNewProductComponent {
  productForm: FormGroup | undefined;
  showToast = false;
  toastMessage = "";
  typeOptions: { id: string; singularLabel: string; subtypes: { id: string; label: string; }[]; }[] = [];
  subtypeOptions: { id: string; label: string; }[] = [];
  editProductId?: number;
  productImage: string | undefined;
  imageChanged = false;

  constructor(private fb: FormBuilder,
    private productService: ProductService,
    public activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(async params => {
      this.editProductId = params['id'];
      const product = await this.productService.getProduct(this.editProductId!);
      if (!product) return; // TODO: Handle error
      const fileName = product.image;
      delete product.image;
      const image = await this.productService.getProductImage(fileName);
      // product.image = image.data;
      this.productImage = image.publicUrl;
      this.productForm?.patchValue(product);
/*       this.productForm?.controls['description'].patchValue(product.description, { emitEvent: false });
 */    })
    this.typeOptions = this.productService.getTypes();
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

  isEditing() {
    return !!this.editProductId;
  }

  async addNewProduct() {
    let image = this.productForm?.value.image;
    if (!!image) {
      if (typeof image === 'object') {
        image = image.path;
      } else {
        image = image.split('\\').pop();
      }
    }

    const product = {
      ...this.productForm?.value,
      id: this.editProductId,
      image
    }
    if(!this.imageChanged) {
      delete product.image;
    }

    let databaseError;
    if (this.isEditing()) {
      const { error } = await this.productService.updateProduct(product);
      databaseError = error;

    } else {
      const { error } = await this.productService.createProduct(product);
      databaseError = error;
    }
    if (!databaseError) {
      if (this.isEditing()) {
       //reroute to product page
       //TODO: pass product name so that product page can display the toast message
       this.router.navigate(["product-page"]); 
      } 
      this.toastMessage = `Product "${product.maker} ${product.model}" was added`;

      this.showToast = true;
      this.productForm?.reset()  // Reset the form
      this.productImage = undefined; // Reset the image
      this.imageChanged = false; // Reset the image changed flag
      setTimeout(() => {
        this.showToast = false;
      }, 5000);
    } else {
      const action = this.isEditing() ? 'updating' : 'adding'; //TODO: add error message on screen
      console.error(`Error ${action} product:`, databaseError);
    }
  }

  async onImageChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    const imageFile = input.files?.[0];
    if (!imageFile) return;
    this.imageChanged = true;
    this.productImage = imageFile.name;
    // this.productImage = URL.createObjectURL(imageFile);
    const { data, error } = await this.productService.uploadImage(imageFile);
    let image = data;
    if (error) {
      if ((error as any)?.statusCode == 409) {
        image = { path: imageFile.name, id: '', fullPath: imageFile.name };
      }
      else {
        console.error('Error uploading image:', error);
        return;
      }
    }
    this.productForm?.patchValue({ image });
  }
}