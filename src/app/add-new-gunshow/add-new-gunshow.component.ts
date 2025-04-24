import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GunshowService } from '../services/gunshow.service';
import { Gunshow } from '../model/gunshow';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { JsonPipe, NgIf } from '@angular/common';
import { ToastMessageComponent } from "../toast-message/toast-message.component";


@Component({
  selector: 'app-add-new-gunshow',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, ToastMessageComponent, NgIf],
  templateUrl: './add-new-gunshow.component.html',
  styleUrl: './add-new-gunshow.component.scss'
})
export class AddNewGunshowComponent {

  private supabase: SupabaseClient;
  gunshowForm: FormGroup;
  editGunshowId?: number;
  showToast = false;
  toastMessage = "";

  constructor(private fb: FormBuilder, private router: Router, private gunshowService: GunshowService, public activatedRoute: ActivatedRoute) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)

    this.activatedRoute.params.subscribe(async params => {
      this.editGunshowId = params['id'];
      const gunshow = await this.gunshowService.getGunshow(this.editGunshowId!);
      if (!gunshow) return; // TODO: Handle error
      this.gunshowForm?.patchValue(gunshow);
  })

    this.gunshowForm = this.fb.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      date: ['', [Validators.required]],
      detailsLink: ['', []],
      startDate: ['', [Validators.required]]
    });
  };

  isEditing() {
    return !!this.editGunshowId;
  }

  async addNewGunshow() {

    const gunshow = {
      ...this.gunshowForm?.value,
      id: this.editGunshowId
    }
    let databaseError;
    
    if (this.isEditing()) {
      const { error } = await this.gunshowService.updateGunshow(gunshow);
      databaseError = error;
      this.toastMessage = `Gun show "${gunshow.name}" was updated`;
    } else {
      const { error } = await this.gunshowService.createGunshow(gunshow);
      databaseError = error;
      this.toastMessage = `New gun show "${gunshow.name}" was added`;
    }
    
    if (!databaseError) {
      if (this.isEditing()) {
        //reroute to gusnshow page
        //TODO: pass gunshow name so that gunshow page can display the toast message
        this.router.navigate(["gunshows"]); 
       } 
      this.gunshowForm.reset(); // Reset the form
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    } else {
      console.error('Error inserting gunshow:', databaseError);
    }
  }
}