import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss'
})

export class AdminHomeComponent {
  private supabase: SupabaseClient;

  constructor(private router: Router) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    this.router.navigate(["login"]);
  }
}
