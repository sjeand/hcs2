import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Announcement} from '../model/announcement'
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'announcement-card',
  standalone: true,
  imports: [],
  templateUrl: './announcement-card.component.html',
  styleUrl: './announcement-card.component.scss'
})

export class AnnouncementCardComponent 
implements OnInit {

  @Input() announcement!: Announcement;
  @Output() deleted: EventEmitter<Announcement> = new EventEmitter<Announcement>();
  admin = true;

  constructor(private announcementService: AnnouncementService) {
    this.announcement = {
      title: '',
      subtitle: '',
      text: '',
      /* image: '' */
    }
   }

  ngOnInit(): void {
  }

  /* deleteAnnouncement(){
   this.announcementService.deleteAnnouncement(this.announcement).subscribe(() => {
    this.deleted.emit(this.announcement);
   })

  }; */
}


