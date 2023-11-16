// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { type ListOfCountries, WeatherService } from '../weather.service';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-countries',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './countries.component.html',
//   styleUrl: './countries.component.scss'
// })
// export class CountriesComponent {
//   countries?: ListOfCountries;

//   constructor(weatherService: WeatherService) {
//     weatherService.listOfCountries().subscribe((response) => {
//       this.countries = response;
//     });
//   }
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { type ListOfCountries, WeatherService } from '../weather.service';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-countries',
//   standalone: true,
//   imports: [CommonModule, RouterModule,FormsModule],
//   templateUrl: './countries.component.html',
//   styleUrl: './countries.component.scss'
// })
// export class CountriesComponent {
//   countries?: ListOfCountries;
//   filteredCountries?: ListOfCountries = null;;;
//   searchTerm: string = '';

//   constructor(weatherService: WeatherService) {
//     weatherService.listOfCountries().subscribe((response) => {
//       this.countries = response;
//       this.filteredCountries = response; // Initialize filtered countries
//     });
//   }

//   search(): void {
//     if (!this.countries) return;

//     this.filteredCountries = {
//       error: this.countries.error,
//       msg: this.countries.msg,
//       data: this.countries.data.filter(country =>
//         country.country.toLowerCase().includes(this.searchTerm.toLowerCase())
//       )
//     };
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { type ListOfCountries, WeatherService } from '../weather.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent {
  countries?: ListOfCountries;
  filteredCountries?: ListOfCountries; // Just declare it, it will be undefined by default
  searchTerm: string = '';

  constructor(weatherService: WeatherService) {
    weatherService.listOfCountries().subscribe((response) => {
      this.countries = response;
      // Do not initialize filteredCountries here
    });
  }

  search(): void {
    if (!this.countries || !this.searchTerm) {
      this.filteredCountries = undefined; // Set to undefined when search term is empty
      return;
    }

    this.filteredCountries = {
      error: this.countries.error,
      msg: this.countries.msg,
      data: this.countries.data.filter(country =>
        country.country.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    };
  }
}

