import { Component } from '@angular/core';
import { PageHeadingComponent } from '../page-heading/page-heading.component';
import { GunshowsComponent } from '../gunshows/gunshows.component';
import { ProductPageComponent } from '../product-page/product-page.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [PageHeadingComponent, GunshowsComponent, ProductPageComponent, RouterLink],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
