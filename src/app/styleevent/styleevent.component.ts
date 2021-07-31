import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styleevent',
  template: 
  `
   <h1 [style.color]="error ? 'red' : 'green' ">This is used bind the styles</h1>
   <h1 [ngStyle]="mulitsyles" > multi style properties</h1>

   <button (click)="myfunction($event)"> say hello </button>
   <button (click) = "greet='hai ganesh'"> greet function </button>
   <h2>{{greet}} </h2>


  `,
  styleUrls: ['./styleevent.component.css']
})
export class StyleeventComponent implements OnInit {

  public colorValue = "green"
  public error = false
  public mulitsyles ={
    color : 'violet',
    fontSize: '900',
    textDecoration: 'underline'
  }

  public greet = ""


  constructor() { }

  ngOnInit(): void {
  }
  myfunction(event) {
   console.log(event)
  }
  greetFunction() {
    return this.greet = "hello this is an angular tutorial"
  }

}
