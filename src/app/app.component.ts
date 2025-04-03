import { Component } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router, Event } from '@angular/router';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppTitleComponent } from './app-title/app-title.component';
import { IStaticMethods } from 'preline/preline';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppFooterComponent, AppNavbarComponent, 
    AppTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})

export class AppComponent {
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }
}