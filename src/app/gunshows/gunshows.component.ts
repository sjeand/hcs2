import { Component } from '@angular/core';
import { PageHeadingComponent } from '../page-heading/page-heading.component';
import { GunshowService } from '../services/gunshow.service';
import { Gunshow } from '../model/gunshow';
import { NgFor, NgIf } from '@angular/common';
import { environment } from '../../environments/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ToastMessageComponent } from '../toast-message/toast-message.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'gunshows',
  standalone: true,
  imports: [PageHeadingComponent, NgFor, NgIf, ToastMessageComponent, ConfirmationDialogComponent],
  templateUrl: './gunshows.component.html',
  styleUrl: './gunshows.component.scss'
})
export class GunshowsComponent {
  gunshows: Gunshow[] = [];
  isAdmin: boolean = false;
  private supabase: SupabaseClient;
  toastMessage: string = '';
  showConfirmationDialog: boolean = false;
  gunshowToDelete: Gunshow | null = null;

  constructor(private gunshowService: GunshowService) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async ngOnInit(): Promise<void> {
    await this.checkAdmin();
    this.fetchGunshows();
  }

  async checkAdmin() {
    const { data: { user } } = await this.supabase.auth.getUser();
    if (user) {
      this.isAdmin = true;
    }
  }

  async fetchGunshows() {
    const gunshows = await this.gunshowService.getGunshows();
    this.gunshows = gunshows?.map(show => ({
      ...show,
      date: show.date.replaceAll('\\n', '<br>')
    })) as Gunshow[];

    // Sort gunshows by startDate
    this.gunshows.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  }

  confirmDelete(gunshow: Gunshow) {
    this.gunshowToDelete = gunshow;
    this.showConfirmationDialog = true;
  }

  async deleteGunshow(confirmed: boolean) {
    if (confirmed && this.gunshowToDelete !== null) {
      console.log('Deleting gunshow named: ', this.gunshowToDelete.name); // Debugging: Log the id being deleted
      const { data, error } = await this.gunshowService.deleteGunshow(this.gunshowToDelete.id);
      if (error) {
        console.error('Error deleting gunshow:', error.message);
      } else {
        console.log('Deleted gunshow:', data);
        this.fetchGunshows();
        this.toastMessage = 'Gunshow deleted successfully';
        setTimeout(() => {
          this.toastMessage = '';
        }, 3000);
      }
    }
    this.showConfirmationDialog = false;
    this.gunshowToDelete = null;
  }

  editGunshow(id: number) {}
}
