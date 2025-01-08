import { Component } from '@angular/core';
import { PageHeadingComponent } from '../page-heading/page-heading.component';
import { GunshowService } from '../services/gunshow.service';
import { Gunshow } from '../model/gunshow';
import { NgFor, NgIf } from '@angular/common';
import { environment } from '../../environments/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Component({
  selector: 'gunshows',
  standalone: true,
  imports: [PageHeadingComponent, NgFor, NgIf],
  templateUrl: './gunshows.component.html',
  styleUrl: './gunshows.component.scss'
})
export class GunshowsComponent {
  gunshows: Gunshow[] = [];
  isAdmin: boolean = false;
  private supabase: SupabaseClient;

  constructor(private gunshowService: GunshowService) { 
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }
  
  
  async ngOnInit(): Promise<void> {
    await this.checkAdmin();
    this.fetchGunshows();
  }

  async checkAdmin() {
    const { data: { user } } = await this.supabase.auth.getUser();
    if (user) {
      const { data, error } = await this.supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();
      
      if (data && data.role === 'admin') {
        this.isAdmin = true;
      }
    }
  }
  
  async fetchGunshows() {
    const gunshows = await this.gunshowService.getGunshows();
    this.gunshows = gunshows?.map(show => ({
      ...show,
      date: show.date.replaceAll('\\n', '<br>')
    })) as Gunshow[];
    console.log(JSON.stringify(this.gunshows))
  }

}
