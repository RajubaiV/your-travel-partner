import { Component } from '@angular/core';
import { HeaderPageComponent } from '../header-page/header-page.component';
import { FooterPageComponent } from '../footer-page/footer-page.component';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [HeaderPageComponent, FooterPageComponent],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent {

}
