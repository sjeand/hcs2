import { Component, Input, OnInit } from '@angular/core';
/* import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';
import { DialogService } from '../services/dialog.service'; */
import { AppNavbarComponent } from '../app-navbar/app-navbar.component';
import { AppFooterComponent } from '../app-footer/app-footer.component';
import { PageHeadingComponent } from '../page-heading/page-heading.component';
import { AnnouncementCardComponent } from '../announcement-card/announcement-card.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [AppNavbarComponent, AppFooterComponent, PageHeadingComponent, AnnouncementCardComponent],
  standalone: true,
})
export class HomeComponent implements OnInit {
/* 
  announcements: Announcement[] =[];

  constructor(
    private announcementService: AnnouncementService,
    private dialogService: DialogService
    ) {
   }
*/
   openDialog() {
    /* this.dialogService.confirmDialog(); */
  } 

  ngOnInit(): void {
  /*   const carousel = new HSCarousel(document.querySelector('#carousel'));
    const goTo2Btn = document.querySelector('#go-to-2-btn');

    goTo2Btn.addEventListener('click', () => {
    carousel.goTo(1); */
/* }); */
   /*  this.announcementService.getAnnouncements().subscribe((announcements: Announcement[]) => {
      this.announcements = announcements
     }) */
  }

  /* deleteAnnouncement(announcement: Announcement){
    const index = this.announcements.findIndex(ea => ea._id === announcement._id);
    if(index > -1){
      this.announcements.splice(index, 1);
    }
  } */
}
