import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  // Inject HttpClient to make HTTP requests
  constructor(private httpClient: HttpClient) {}

  // Method to fetch student data from JSONBlob API
  GetStudentData(): Observable<any> {
    return this.httpClient.get('https://api.jsonblob.com/019caf25-1cca-7b07-b451-620c78c93e12');
  }

  // Method to fetch current weather data for Galway from OpenWeatherMap API
  GetWeatherData(): Observable<any> {
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=7558c62e227f57aef5349e60a1671bbd');
  }
}