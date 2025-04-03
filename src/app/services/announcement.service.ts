import { Injectable } from '@angular/core';
import { Announcement } from '../model/announcement';
import { AuthSession, createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AnnouncementService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  constructor() { this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey) }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session
    })
    return this._session
  }

  async getAnnouncementImage(imageName?: string) {
    const bucket = 'announcement_images';
    const realImageName = (imageName == null) ? 'announcement.png' : imageName;
    const { data } = await this.supabase
      .storage
      .from(bucket)
      .getPublicUrl(realImageName)
    return data;
  }

    async getAnnouncements() {
      let results =  await this.supabase
          .from('announcements')
          .select();
        return results?.data;   
    }

    createAnnouncement(announcement: Announcement) {}
}
