import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})

export class SearchBarComponent {
  searchText = '';

  constructor(private router: Router) { }

  searchChange() {
    // this.router.navigate(["product-page", {searchText:this.searchText}])
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["product-page", {searchText:this.searchText}])});
  }
}import { FormsModule } from '@angular/forms';

