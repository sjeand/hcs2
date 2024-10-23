import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppLogoComponent } from './app-logo/app-logo.component';
/* import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { GunshowsComponent } from './gunshows/gunshows.component';
import { AboutComponent } from './about/about.component'; */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RequestToPurchaseDialogComponent } from './request-to-purchase-dialog/request-to-purchase-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { NewAnnouncementComponent } from './new-announcement/new-announcement.component'; */
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
/* import { MatInput, MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatButton, MatButtonModule} from '@angular/material/button';
import { AddNewAnnouncementComponent } from './add-new-announcement/add-new-announcement.component';
import { AddNewGunshowComponent } from './add-new-gunshow/add-new-gunshow.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { PoliciesComponent } from './policies/policies.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule} from '@angular/material/menu';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { SignInComponent } from './sign-in/sign-in.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { Nl2brPipe } from './nl2br.pipe'; */
// import { ProductPageComponent } from './product-page/product-page.component';
// import { AppNavbarComponent } from './app-navbar/app-navbar.component';
// import { AppFooterComponent } from './app-footer/app-footer.component';
// import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
// import { SingleProductDetailsComponent } from './single-product-details/single-product-details.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { PageHeadingComponent } from './page-heading/page-heading.component';
// import { ProductCardComponent } from './product-card/product-card.component';
// import { AppTitleComponent } from './app-title/app-title.component';
// import { SearchBarComponent } from './search-bar/search-bar.component';
// import { ProductNavbarComponent } from './product-navbar/product-navbar.component';
// import { AnnouncementCardComponent } from './announcement-card/announcement-card.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    // AppComponent,
    // ProductPageComponent,
    // HomeComponent,
    // AppLogoComponent,
    /* ProductDetailComponent, */
    // AppNavbarComponent,
/*     GunshowsComponent,
    AboutComponent, */
    // AppFooterComponent,
    // SingleProductDetailsComponent,
   /*  RequestToPurchaseDialogComponent,
    NewAnnouncementComponent, */
    // AdminSignInComponent,
    // AddNewProductComponent,
    // PageNotFoundComponent,
    // PageHeadingComponent,
    // ProductCardComponent,
    // AppTitleComponent,
    // SearchBarComponent,
    // ProductNavbarComponent,
    // AnnouncementCardComponent
    /* AddNewAnnouncementComponent,
    AddNewGunshowComponent,
    ProductImageComponent,
    PoliciesComponent,
    CarouselComponent,
    ProductFilterPipe,
    ConfirmationDialogComponent,
    Nl2brPipe,
 */

  ],
  imports: [
    BrowserModule,
   /*  AppRoutingModule, */
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    /* MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatTableModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    MatDividerModule,
    MatMenuModule,
    MatSnackBarModule,
    MaterialFileInputModule */
  ],
  providers: []
})
export class AppModule { }