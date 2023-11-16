import { Weather, WeatherService } from './../weather.service';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  weather?: Weather;

  constructor(private weatherService: WeatherService) {}

  @Input()
  set country(country: string) {
    this.weatherService.weatherOfCountry(country).subscribe((response) => {
      this.weather = response;
    });
  }
}
