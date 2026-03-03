import { Component, OnInit } from '@angular/core';
import { DataService } from './Services/data-service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  // Array to store student data from the API
  students: any[] = [];

  // Object to store weather data from the API
  weatherData: any;

  // Inject DataService to access API methods
  constructor(private dataService: DataService) {}

  ngOnInit(): void {

    // Call the student data service and subscribe to the Observable
    this.dataService.GetStudentData().subscribe({
      next: (data) => {
        // Store the students array from the response
        this.students = data.students;
      },
      error: (err) => {
        console.log('Student error:', err);
      }
    });

    // Call the weather data service and subscribe to the Observable
    this.dataService.GetWeatherData().subscribe({
      next: (data) => {
        // Store the full weather response object
        this.weatherData = data;
      },
      error: (err) => {
        // API key may not be activated yet
        console.log('Weather API not ready yet:', err);
      }
    });
  }
}