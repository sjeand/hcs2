import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppLogoComponent } from './app-logo/app-logo.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppTitleComponent } from './app-title/app-title.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductNavbarComponent } from './product-navbar/product-navbar.component';
import { AnnouncementCardComponent } from './announcement-card/announcement-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink, AppFooterComponent, AppNavbarComponent, AppLogoComponent, ProductPageComponent, PageNotFoundComponent, AppTitleComponent, SearchBarComponent, ProductNavbarComponent, AnnouncementCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
 /*  template: `<div> hi </div>` */
 standalone: true
})
export class AppComponent {
  title = 'hcs2';
}
