import { Routes } from '@angular/router';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppLogoComponent } from './app-logo/app-logo.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AppTitleComponent } from './app-title/app-title.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductNavbarComponent } from './product-navbar/product-navbar.component';
import { AnnouncementCardComponent } from './announcement-card/announcement-card.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { AddNewAnnouncementComponent } from './add-new-announcement/add-new-announcement.component';
import { AddNewGunshowComponent } from './add-new-gunshow/add-new-gunshow.component';
import { GunshowsComponent } from './gunshows/gunshows.component';

export const routes: Routes = [
    {path: 'app-navbar', component: AppNavbarComponent},
    {path: 'app-footer', component: AppFooterComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'product-page', component: ProductPageComponent},
    {path: 'product-page/:searchText', component: ProductPageComponent},
    {path: 'page-not-found', component: PageNotFoundComponent},
    {path: 'app-logo', component: AppLogoComponent},
    {path: 'page-heading', component: PageHeadingComponent},
    {path: 'product-card', component: ProductCardComponent},
    {path: 'app-title', component: AppTitleComponent},
    {path: 'search-bar', component: SearchBarComponent},
    {path: 'product-navbar', component: ProductNavbarComponent},
    {path: 'announcement-card', component: AnnouncementCardComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'add-new-product', component: AddNewProductComponent},
    {path: 'add-new-announcement', component: AddNewAnnouncementComponent},
    {path: 'add-new-gunshow', component: AddNewGunshowComponent},
    {path: 'gunshows', component: GunshowsComponent}

];
