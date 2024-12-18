import { Component, Input, } from '@angular/core';
import { Announcement } from '../model/announcement'
import { AnnouncementService } from '../services/announcement.service';


@Component({
  selector: 'announcement-card',
  standalone: true,
  imports: [],
  templateUrl: './announcement-card.component.html',
  styleUrl: './announcement-card.component.scss'
})


export class AnnouncementCardComponent {
  @Input() announcement!: Announcement;
  announcementImage = "";

  constructor(private announcementService: AnnouncementService) {

  }
/*   async ngOnInit(): Promise<void> {
    const data = await this.announcementService.getAnnouncementImage(this.announcement.image);
    if (!data) return;
    this.announcementImage = data.publicUrl;

  } */

}
