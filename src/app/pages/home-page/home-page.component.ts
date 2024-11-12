import { Component } from '@angular/core';
import { HeaderPageComponent } from '../header-page/header-page.component';
import { FooterPageComponent } from '../footer-page/footer-page.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderPageComponent,FooterPageComponent,FormsModule,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  searchQuery: string = '';
  countries = [
    { id: 1, name: 'Bali' },
    { id: 2, name: 'Malaysia' },
    { id: 3, name: 'Switzerland' },
    { id: 4, name: 'Indonesia' },
    { id: 5, name: 'Australia' },
    { id: 6, name: 'Thailand' },
    { id: 7, name: 'Srilanka' },
    { id: 8, name: 'Maldives' },
    { id: 9, name: 'Manlai' },
    { id: 10, name: 'Andhaman' }
  ];
  filteredResults:any[] = [];

  constructor(private router: Router) {} 

  filterResults() {
    const query = this.searchQuery.toLowerCase();
    if(query != ""){
      this.filteredResults = this.countries.filter(country =>
        country.name.toLowerCase().includes(query)
      );
    }else{
      this.filteredResults = [];
    }
  }

  search() {
    if (this.searchQuery === "") {
      alert('Please enter a correct name.');
    } 
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
