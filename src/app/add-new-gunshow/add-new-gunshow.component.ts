import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GunshowService } from '../services/gunshow.service';
import { Gunshow } from '../model/gunshow';
import { Router } from '@angular/router';
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
  showToast = false;
  toastMessage = "";

  constructor(private fb: FormBuilder, private router: Router,
    private gunshowService: GunshowService,
    
  ) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
    this.gunshowForm = this.fb.group({
          name: ['', [Validators.required]],
          location: ['', [Validators.required]],
          date: ['', [Validators.required]],
          detailsLink: ['', []]
        });
  };

   async addNewGunshow(){
    const { error } = await this.supabase
    .from('gunshows')
    .insert(this.gunshowForm?.value)
    if (!error) {
      this.toastMessage = `New gun show "${this.gunshowForm?.value.name}" was added`;
      this.gunshowForm.reset(); // Reset the form
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    } else {
      console.error('Error inserting gunshow:', error);
    }
   } 
}
