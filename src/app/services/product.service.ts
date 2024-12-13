import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Product, ProductUpload } from '../model/product';
import { environment } from '../../environments/environment'
import {

  AuthSession,
  createClient,

  SupabaseClient,
  User,
} from '@supabase/supabase-js'

const productTypes = [
  {
    id: "handgun",
    label: "All Hand Guns",
    subtypes: [{ id: "semiautomatic", label: "Semi Automatic" }, { id: "revolver", label: "Revolver" }],
  },
  {
    id: "longgun",
    label: "All Long Guns",
    subtypes: [{ id: "rifle", label: "Rifle" }, { id: "shotgun", label: "Shotgun" }],
  },
  {
    id: "other",
    label: "Other",
    subtypes: [{ id: "ammunition", label: "Ammunition" }, { id: "accessory", label: "Accessory" }, { id: "part", label: "Part" }],
  },
]



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;
  constructor() { this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey) }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session
    })
    return this._session
  }

  async getProductImage(imageName?: string) {
    const bucket = 'product_images';
    const realImageName = (imageName == null) ? 'imageComingSoon.png' : imageName;
    const { data } = await this.supabase
      .storage
      .from(bucket)
      .getPublicUrl(realImageName)
    return data;
  }

  async getProducts(productType: string, searchString: string | null) {
    let query = undefined;
    let results = undefined;
    if (searchString !== null) {
      results = await this.supabase
        .from('products')
        .select().or(`maker.like.%${searchString}%,model.like.%${searchString}%`);
      return results?.data;
    }
    switch (productType) {

      case 'handgun':
        results = await this.supabase
          .from('products')
          .select().eq('type', 'handgun')
        break;

      case 'revolver':
        results = await this.supabase
          .from('products')
          .select().eq('subtype', 'revolver')
        break;

      case 'semiautomatic':
        results = await this.supabase
          .from('products')
          .select().eq('subtype', 'semiautomatic')
        break;

      case 'longgun':
        results = await this.supabase
          .from('products')
          .select().eq('type', 'longgun')
        break;

      case 'rifle':
        results = await this.supabase
          .from('products')
          .select().eq('subtype', 'rifle')
        break;

      case 'shotgun':
        results = await this.supabase
          .from('products')
          .select().eq('subtype', 'shotgun')
        break;

      case 'other':
        results = await this.supabase
          .from('products')
          .select().eq('type', 'other')
        break;

      case 'accessory':
        results = await this.supabase
          .from('products')
          .select().eq('subtype', 'accessory')
        break;

      case 'ammunition':
        results = await this.supabase
          .from('products')
          .select().eq('subtype', 'ammunition')
        break;

      case 'part':
        results = await this.supabase
          .from('products')
          .select().eq('subtype', 'part')
        break;

      case 'all':
      default:
        results = await this.supabase
          .from('products')
          .select();
        break;
    }
    return results?.data;

    
  }

  createProduct(product: ProductUpload) {
    /*  this.httpClient.post<ProductUpload>("/products", product); */
  }
}
