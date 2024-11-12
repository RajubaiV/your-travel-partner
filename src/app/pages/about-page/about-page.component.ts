import { Component } from '@angular/core';
import { HeaderPageComponent } from '../header-page/header-page.component';
import { FooterPageComponent } from '../footer-page/footer-page.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [HeaderPageComponent,FooterPageComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
