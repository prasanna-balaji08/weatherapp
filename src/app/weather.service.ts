import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = 'c06403b28c93810fea577948175e118b';

  constructor(private http: HttpClient) { }


  getWeatherDataByCoords(lat, lon) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'imperial')
      .set('appid', this.apiKey)
    return this.http.get(this.url, { params });
  }

  getWeatherDataByCityName(city: string) {
    let params = new HttpParams()
      .set('q', city)
      .set('units', 'imperial')
      .set('appid', this.apiKey)

    return this.http.get(this.url, { params });
  }
} 