import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HSDropdown } from "preline/preline";

@Component({
  selector: 'product-navbar',
  standalone: true,
  imports: [],
  templateUrl: './product-navbar.component.html',
  styleUrl: './product-navbar.component.scss'
})
export class ProductNavbarComponent {
  @Output() public onFilterClicked = new EventEmitter<string>();
  onClick(filterType: string): void {
    this.onFilterClicked.emit(filterType)
  }
  ngOnInit(): void {
    const openBtn = document.querySelector('#hand-gun-btn');

    openBtn?.addEventListener('click', () => {
      const dropdown = document.querySelector("#hand-gun-dropdown")
      HSDropdown.open(dropdown as HTMLElement);
    });
  }
}

