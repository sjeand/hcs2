import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ProductPageComponent } from '../product-page/product-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomeComponent, ProductPageComponent, PageNotFoundComponent, SearchBarComponent, RouterOutlet, RouterLink],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.scss'
})
export class AppNavbarComponent {

}

/* OLD CODE

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() searchText = "";


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchChange(){
    this.router.navigate(["/products", this.searchText])
  }
}
 */