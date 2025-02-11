import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthSession, createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm: FormGroup;
   private supabase: SupabaseClient;
    _session: AuthSession | null = null;
  errorMessage ='';
  user: any = null;
  showPassword = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.loginForm.valueChanges.subscribe(value => {
      this.errorMessage = '';
    });
    this.checkUser();
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      this.errorMessage = '';
      const creds =  this.loginForm.value;
      // Handle form submission, e.g., send data to the server
      
      const { data, error } = await this.supabase.auth.signInWithPassword(
        { email: creds.username, password: creds.password }
    );
    if (!error){
      this.user = data.user;
      //this is where we will redirect to admin form
      this.router.navigate(["home"]);
    } else {
      this.errorMessage = error.message;
    }
    
    }
  }
  async checkUser() {
    const { data } = await this.supabase.auth.getSession();
    this._session = data.session;
    this.user = data.session?.user || null;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    }
}