import { Component } from '@angular/core';
import { HeaderPageComponent } from '../header-page/header-page.component';
import { FooterPageComponent } from '../footer-page/footer-page.component';

@Component({
  selector: 'app-package-page',
  standalone: true,
  imports: [HeaderPageComponent,FooterPageComponent],
  templateUrl: './package-page.component.html',
  styleUrl: './package-page.component.css'
})
export class PackagePageComponent {

}
