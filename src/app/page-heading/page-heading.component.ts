import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-heading',
  standalone: true,
  imports: [],
  templateUrl: './page-heading.component.html',
  styleUrl: './page-heading.component.scss'
})
export class PageHeadingComponent {
  @Input() title = "";
  constructor(
   
  ) {
  
  }
}


