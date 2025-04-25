import { Component, EventEmitter, Output } from '@angular/core';
import { HSDropdown } from "preline/preline";
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'product-navbar',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './product-navbar.component.html',
  styleUrl: './product-navbar.component.scss'
})
export class ProductNavbarComponent {
  @Output() public onFilterClicked = new EventEmitter<string>();
  searchText: string = '';

  constructor(private router: Router) {
    const currentUrl = this.router.url;
    const searchParameter = 'searchText=';
    const location = currentUrl.indexOf(searchParameter);
    if (location === -1) {
      this.searchText = '';
      return;
    }
    this.searchText = currentUrl.substring(location + searchParameter.length);
   }

  ngOnInit(): void {
    const openBtn = document.querySelector('#hand-gun-btn');
    openBtn?.addEventListener('click', () => {
      const dropdown = document.querySelector("#hand-gun-dropdown")
      HSDropdown.open(dropdown as HTMLElement);
    });
  }
  onClick(filterType: string): void {
    this.searchText = '';
    this.onFilterClicked.emit(filterType)
  }
}

