import { Component } from '@angular/core';
import { HeaderPageComponent } from '../header-page/header-page.component';
import { FooterPageComponent } from '../footer-page/footer-page.component';

@Component({
  selector: 'app-destination-page',
  standalone: true,
  imports: [HeaderPageComponent,FooterPageComponent],
  templateUrl: './destination-page.component.html',
  styleUrl: './destination-page.component.css'
})
export class DestinationPageComponent {

}
