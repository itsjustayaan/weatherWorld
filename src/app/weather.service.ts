import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Weather = {
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
};

export type ListOfCountries = {
  error: boolean;
  msg: string;
  data: {
    country: string;
  }[];
};

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  weatherOfCountry(country: string): Observable<Weather> {
    const query = new URLSearchParams();
    query.set('q', country);
    query.set('APPID', '794ee95e63c5a32aaf88cd813fa2e425');

    return this.http.get<Weather>(
      `https://api.openweathermap.org/data/2.5/weather?${query.toString()}`
    );
  }

  listOfCountries(): Observable<ListOfCountries> {
    return this.http.get<ListOfCountries>(
      'https://countriesnow.space/api/v0.1/countries'
    );
  }
}
