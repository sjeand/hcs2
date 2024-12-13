import { Component } from '@angular/core';
import { PageHeadingComponent } from '../page-heading/page-heading.component';
import { GunshowService } from '../services/gunshow.service';
import { Gunshow } from '../model/gunshow';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'gunshows',
  standalone: true,
  imports: [PageHeadingComponent, NgFor, NgIf],
  templateUrl: './gunshows.component.html',
  styleUrl: './gunshows.component.scss'
})
export class GunshowsComponent {
  gunshows: Gunshow[] = [];
  constructor(private gunshowService: GunshowService) { }

  ngOnInit(): void {
    this.fetchGunshows();
  }
  async fetchGunshows() {
    const gunshows = await this.gunshowService.getGunshows();
    this.gunshows = gunshows?.map(show =>({
      ...show, 
      date: show.date.replaceAll('\\n', '<br>')
    })) as Gunshow[];
    console.log(JSON.stringify(this.gunshows))
  }

}
