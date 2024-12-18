import { Component, inject} from '@angular/core';
import { PageHeadingComponent } from '../page-heading/page-heading.component';
import { AnnouncementCardComponent } from '../announcement-card/announcement-card.component';
import { HomeSliderComponent } from '../home-slider/home-slider.component';
import { Announcement } from '../model/announcement';
import { CommonModule, NgFor } from '@angular/common';
import { AnnouncementService } from '../services/announcement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [PageHeadingComponent, AnnouncementCardComponent, HomeSliderComponent, CommonModule, NgFor],
  standalone: true,
})

export class HomeComponent {
  announcements: Announcement[] = [];

constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.fetchAnnouncements();
  }
  async fetchAnnouncements() {
    const announcements = await this.announcementService.getAnnouncements();
    this.announcements = announcements as unknown as Announcement[];
  }

}



/* async ngOnInit(): Promise<void> {
  const data = await this.announcementService.getAnnouncementImage(this.announcement.image);
  if (!data) return;
  this.announcementImage = data.publicUrl;

} */