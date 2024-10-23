import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import { Announcement } from '../model/announcement';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor( ) { }

  getAnnouncements(): Observable<Announcement[]> {
    /* return this.httpClient.get<Announcement[]>('/announcements').pipe(map((obj: any) => obj.announcements)); */

    return of([
      {
        title: "New Annoucement",
        subtitle: "Annoucement 1",
        text: "my annoucement is working"
    },{
        title: "New Annoucement",
        subtitle: "Annoucement 2",
        text: "my annoucement is working again"
      
     }
    ])
  }

/*   createAnnouncement(announcement: Announcement) {
    return this.httpClient.post<Announcement>("/announcements", announcement);
  }

  deleteAnnouncement(announcement: Announcement){
    return this.httpClient.delete(`/announcements/${announcement._id}`);
  } */

 /*  uploadFile(file: File){
    const formData = new FormData();
    formData.append("thumbnail", file)
    return this.httpClient.post("/file-upload", formData);
  } */
}
