
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { AuthSession, createClient, SupabaseClient } from '@supabase/supabase-js'
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
    let results = await this.supabase
      .from('gunshows')
      .select();
    return results?.data;
  }

  async deleteGunshow(id: number) {
    return await this.supabase.from('gunshows')
      .delete().eq('id', id);
  }

  async createGunshow(gunshow: Gunshow) {
    return await this.supabase
      .from('gunshows')
      .insert(gunshow)
      .select()
  }

  async updateGunshow(gunshow: Partial<Gunshow>) {
    const id = gunshow.id;
    delete gunshow.id;
    return await this.supabase
      .from('gunshows')
      .update(gunshow)
      .eq('id', id);
  }

  async getGunshow(id: number) {
     const { data, error } = await this.supabase
         .from('gunshows')
         .select()
         .eq('id', id);
     if (error) {
      //TODO: Handle error
       console.error('Error getting gunshow:', error.message);
     }
     return data?.[0];
   }
}