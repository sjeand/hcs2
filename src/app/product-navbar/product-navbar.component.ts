import { Component } from '@angular/core';
import { HSDropdown } from "preline/preline";

@Component({
  selector: 'product-navbar',
  standalone: true,
  imports: [],
  templateUrl: './product-navbar.component.html',
  styleUrl: './product-navbar.component.scss'
})
export class ProductNavbarComponent {
  ngOnInit(): void {
    const openBtn = document.querySelector('#hand-gun-btn');

    openBtn?.addEventListener('click', () => {
      const dropdown=document.querySelector("#hand-gun-dropdown")
      HSDropdown.open(dropdown as HTMLElement);
    });
  }
}

/* hand-gun-dropdown */