import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd, Router, Event} from '@angular/router';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppLogoComponent } from './app-logo/app-logo.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppTitleComponent } from './app-title/app-title.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductNavbarComponent } from './product-navbar/product-navbar.component';
import { AnnouncementCardComponent } from './announcement-card/announcement-card.component';
import { IStaticMethods } from 'preline/preline';
import { PageHeadingComponent } from "./page-heading/page-heading.component";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink, AppFooterComponent, AppNavbarComponent, AppLogoComponent,
    ProductPageComponent, PageNotFoundComponent, AppTitleComponent, SearchBarComponent, ProductNavbarComponent,
    AnnouncementCardComponent, PageHeadingComponent],
    /*Router is upset due to new code added for preline - routes working but all red line 34 */
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
 /*  template: `<div> hi </div>` */
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