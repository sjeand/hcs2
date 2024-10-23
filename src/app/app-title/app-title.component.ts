import { Component } from '@angular/core';
import { AppLogoComponent } from '../app-logo/app-logo.component';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [AppLogoComponent],
  templateUrl: './app-title.component.html',
  styleUrl: './app-title.component.scss'
})
export class AppTitleComponent {

}
