import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs';
import { Announcement} from '../announcement';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-add-new-announcement',
  templateUrl: './add-new-announcement.component.html',
  styleUrls: ['./add-new-announcement.component.scss']
})
export class AddNewAnnouncementComponent implements OnInit {
  @ViewChild('errorDialog') errorDialog!: TemplateRef<any>;

  announcement: Announcement = {
    title: '',
    subtitle: '',
    image: '',
    text: ''
  };

  error: string = '';
  imageFile?: File;

  constructor(
    private announcementService: AnnouncementService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) {}

  addAnnouncement() {
    this.error = '';
    this.announcementService
      .createAnnouncement(this.announcement)
      .pipe(catchError(async (err) => this.dialog.open(this.errorDialog)))
      .subscribe((response) => {
        this.snackBar.open('Announcement has been posted!');});
  }

  ngOnInit(): void {
  }

}

/*     if (this.file){
      this.announcement.image = "../../assets/" + this.file.name;
    }
    this.announcementService.createAnnouncement(this.announcement).subscribe(()=>{});
  }

  fileChosen(event: any){
    this.file = event.target.files[0];

    if (this.file){

      this.announcementService.uploadFile(this.file).subscribe(()=>{})
    } */



