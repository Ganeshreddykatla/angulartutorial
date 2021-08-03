import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styleevent',
  template: 
  `
  <div [ngSwitch]= "'mahendra'">
  <div *ngSwitchCase="'audi'">  this is audi car</div>
  <div *ngSwitchCase="'bmw'">  this is bmw car</div>
  <div *ngSwitchCase="'benz'">  this is benz car</div>
  <div *ngSwitchCase="'ferrari'">  this is audi car</div>
  <div *ngSwitchDefault>  this is Mahendra car</div>
<div>

    <div *ngFor="let car of cars; index as i">
      <h2>{{i}} {{car}} </h2>
    </div>  

   <h1 [style.color]="error ? 'red' : 'green' ">This is used bind the styles</h1>
   <h1 [ngStyle]="mulitsyles" > multi style properties</h1>
   <button (click)="myfunction($event)"> say hello </button>
   <button (click) = "greet='hai ganesh'"> greet function </button>
   <h2>{{greet}} </h2>
   <input #nameInput type="text">
   <button (click)="handleSubmit(nameInput.value)"> submit </button>
   <input  type="text" [(ngModel)]="myname">
    {{myname}}


  `,
  styleUrls: ['./styleevent.component.css']
})
export class StyleeventComponent implements OnInit {


  public cars = [
    "audi",
    "bmw",
    "ferrari",
    "benz"
  ]
   public car ="audi "
  public displayMyname= false;
  public myname = ""
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
  handleSubmit(value) {
    console.log("input value", value)
  }
  greetFunction() {
    return this.greet = "hello this is an angular tutorial"
  }

}
