import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Listcomponent } from './list-component/list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Listcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  // 'title' is a signal that holds the value of the app's title
  protected readonly title = signal('data-binding-app');

  // Initialize pressed counter and hide flag
  pressed: number = 0; // Counter for button presses
  hide: boolean = false; // Flag to hide or show an element

  // Increment the counter each time the button is clicked
  addToAmt() {
    this.pressed++;
  }

  // Toggle the 'hide' flag when the star is double-clicked
  onDblClick() {
    this.hide = !this.hide; // Toggle between true and false
  }
}