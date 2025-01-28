import { Component, inject, OnInit} from '@angular/core';
import { PageHeadingComponent } from '../page-heading/page-heading.component';
import { AnnouncementCardComponent } from '../announcement-card/announcement-card.component';
import { HomeSliderComponent } from '../home-slider/home-slider.component';
import { Announcement } from '../model/announcement';
import { CommonModule, NgFor } from '@angular/common';
import { AnnouncementService } from '../services/announcement.service';
import { AuthSession, createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [AnnouncementCardComponent, HomeSliderComponent, CommonModule, NgFor, PageHeadingComponent],
  standalone: true,
})

export class HomeComponent implements OnInit {
  announcements: Announcement[] = [];
  supabase: SupabaseClient;
  private _session: AuthSession | null = null;
  user: any = null;

  constructor(private announcementService: AnnouncementService) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async ngOnInit(): Promise<void> {
    await this.checkUser();
    this.fetchAnnouncements();
  }

  async checkUser() {
    const { data } = await this.supabase.auth.getSession();
    this._session = data.session;
    this.user = data.session?.user || null;
  }

  async fetchAnnouncements() {
    const announcements = await this.announcementService.getAnnouncements();
    this.announcements = announcements || [];
  }
}



/* async ngOnInit(): Promise<void> {
  const data = await this.announcementService.getAnnouncementImage(this.announcement.image);
  if (!data) return;
  this.announcementImage = data.publicUrl;

} */