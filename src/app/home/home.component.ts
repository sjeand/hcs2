import { Component, Input, OnInit } from '@angular/core';
/* import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';
import { DialogService } from '../services/dialog.service'; */
import { AppNavbarComponent } from '../app-navbar/app-navbar.component';
import { AppFooterComponent } from '../app-footer/app-footer.component';
import { PageHeadingComponent } from '../page-heading/page-heading.component';
import { AnnouncementCardComponent } from '../announcement-card/announcement-card.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { HomeSliderComponent } from '../home-slider/home-slider.component';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../model/announcement';
import { CommonModule } from '@angular/common';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [AppNavbarComponent, AppFooterComponent, PageHeadingComponent, AnnouncementCardComponent, SearchBarComponent, HomeSliderComponent, CommonModule],
  standalone: true,
})
export class HomeComponent implements OnInit {
  supabase?: SupabaseClient;
  announcements: Announcement[] =[];

  constructor(
    private announcementService: AnnouncementService
    // private dialogService: DialogService
    ) {
      this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
   }

   openDialog() {
    /* this.dialogService.confirmDialog(); */
  } 

  async ngOnInit(): Promise<void> {
  /*   const carousel = new HSCarousel(document.querySelector('#carousel'));
    const goTo2Btn = document.querySelector('#go-to-2-btn');

    goTo2Btn.addEventListener('click', () => {
    carousel.goTo(1); */
/* }); */
   await this.supabase?.auth.signInWithPassword({email:"hcsuser@hotmail.com", password:"hcsuser"});

   this.announcementService.getAnnouncements().subscribe((announcements: Announcement[]) => {
      this.announcements = announcements
     }) 
  }

  /* deleteAnnouncement(announcement: Announcement){
    const index = this.announcements.findIndex(ea => ea._id === announcement._id);
    if(index > -1){
      this.announcements.splice(index, 1);
    }
  } */
}
