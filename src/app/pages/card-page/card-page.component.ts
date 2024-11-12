import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})
export class CardPageComponent {
  constructor(private router: Router) {} 

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
