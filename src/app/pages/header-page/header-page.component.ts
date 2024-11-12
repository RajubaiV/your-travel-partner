import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-page',
  standalone: true,
  imports: [],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.css'
})
export class HeaderPageComponent {
  constructor(private router: Router) {} 

  home(){
    this.router.navigate(['/home']);
  }

  about(){
    this.router.navigate(['/about']);
  }
  
  services(){
    this.router.navigate(['/services']);
  }
  
  packages(){
    this.router.navigate(['/packages']);
  }
  
  destination(){
    this.router.navigate(['/destination']);
  }
  
  booking(){
    this.router.navigate(['/booking']);
  }
  
  guides(){
    this.router.navigate(['/guides']);
  }
  
  testimonial(){
    this.router.navigate(['/review']);
  }
  
  footer(){
    this.router.navigate(['/footer']);
  }
  
}
