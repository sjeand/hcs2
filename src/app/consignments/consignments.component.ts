import { Component } from '@angular/core';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@Component({
  selector: 'app-consignments',
  standalone: true,
  imports: [PageNotFoundComponent],
  templateUrl: './consignments.component.html',
  styleUrl: './consignments.component.scss'
})
export class ConsignmentsComponent {

}
