import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { PackagePageComponent } from './pages/package-page/package-page.component';
import { DestinationPageComponent } from './pages/destination-page/destination-page.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { ReviewPageComponent } from './pages/review-page/review-page.component';
import { FooterPageComponent } from './pages/footer-page/footer-page.component';
import { HeaderPageComponent } from './pages/header-page/header-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'header', component: HeaderPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'services', component: ServicePageComponent },
    { path: 'packages', component: PackagePageComponent },
    { path: 'destination', component: DestinationPageComponent },
    { path: 'booking', component: BookingPageComponent },
    // { path: 'guides', component:  },
    { path: 'review', component: ReviewPageComponent },
    // { path: 'footer', component: FooterPageComponent }
];
