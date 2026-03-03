import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './acomponent/acomponent'; // bringing in the a component
import { BComponent } from './bcomponent/bcomponent'; // bringing in the b component

@Component({
  selector: 'root-directive',
  imports: [RouterOutlet, AComponent, BComponent], // using both components here
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  name:string = "Adam"; // storing the name
  age:number = 22; // storing the age

}