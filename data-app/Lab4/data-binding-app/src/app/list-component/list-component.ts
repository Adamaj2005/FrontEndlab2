import { Component } from '@angular/core';

@Component({
  selector: 'app-listcomponent',
  templateUrl: './list-component.html',
  styleUrl: './list-component.css'
})
export class Listcomponent {
  // Array holding presidents names and their terms in office
  presidents: any[] = [
    {name: "Higgins", term: "2011-"}, // Higgins term started in 2011
    {name: "McAleese", term: "1997-2011"} // McAleese served from 1997 to 2011
  ];
}