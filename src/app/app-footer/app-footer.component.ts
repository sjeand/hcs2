import { Component } from '@angular/core';
import { AddNewProductComponent } from '../add-new-product/add-new-product.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddNewAnnouncementComponent } from '../add-new-announcement/add-new-announcement.component';
import { AddNewGunshowComponent } from '../add-new-gunshow/add-new-gunshow.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AddNewProductComponent, RouterLink, RouterOutlet,AddNewAnnouncementComponent, AddNewGunshowComponent],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.scss'
})
export class AppFooterComponent {

}
