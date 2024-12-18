
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import {AuthSession,createClient,SupabaseClient} from '@supabase/supabase-js'
import { Gunshow } from '../model/gunshow';


@Injectable({
  providedIn: 'root'
})
export class GunshowService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;
  
  constructor() { this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey) }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session
    })
    return this._session
  }

  async getGunshows() {
    let results =  await this.supabase
        .from('gunshows')
        .select();
      return results?.data;
    
  }

  createGunshow(gunshow: Gunshow) {
    /*  this.httpClient.post<ProductUpload>("/products", product); */
  }
}
