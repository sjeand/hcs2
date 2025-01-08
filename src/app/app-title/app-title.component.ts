import { Component, OnInit } from '@angular/core';
import { AppLogoComponent } from '../app-logo/app-logo.component';
import { AuthSession, createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [AppLogoComponent, AdminHomeComponent, CommonModule],
  templateUrl: './app-title.component.html',
  styleUrl: './app-title.component.scss'
})

export class AppTitleComponent implements OnInit {
  supabase: SupabaseClient;
  private _session: AuthSession | null = null;
  user: any = null;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async ngOnInit(): Promise<void> {
    await this.checkUser();
    this.supabase.auth.onAuthStateChange((event, session) => {
      this._session = session;
      this.user = session?.user || null;
    });
  }

  async checkUser() {
    const { data, error } = await this.supabase.auth.getSession();
    if (error) {
      console.error('Error getting session:', error);
      return;
    }
    this._session = data.session;
    this.user = data.session?.user || null;
    console.log('User:', this.user); // Add this line to verify the user
  }

  async logout() {
    const { error } = await this.supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
    } else {
      this.user = null;
    }
  }
}