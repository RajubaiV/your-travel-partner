import { Component } from '@angular/core';
import { HeaderPageComponent } from '../header-page/header-page.component';
import { FooterPageComponent } from '../footer-page/footer-page.component';

@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [HeaderPageComponent,FooterPageComponent],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css'
})
export class BookingPageComponent {

}
