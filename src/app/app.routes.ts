import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { CountriesComponent } from './countries/countries.component';

export const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path: ':country', component: WeatherComponent },
];
