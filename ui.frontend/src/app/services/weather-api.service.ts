import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private weartherApiUrl = "http://api.weatherapi.com/v1";

  constructor(private http: HttpClient) { }

  getLocalPrevision(city = 'Passo Fundo') {
    return this.http.get(`${this.weartherApiUrl}/current.json?key=${environment.weatherApiKey}&q=${city}`);
  }
}
