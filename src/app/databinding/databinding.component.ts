import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  template: `
     <input [id]="myFisrtId" type="text" value="Angular tutorial">  
     <input id="{{myuid}}" disabled="{{false}}" type="text" value="Angular tutorial"> 
     <h2 class="info"> Angular Tutorial </h2> 
     <h2 [class.danger]="dangerClass" [class.format_text] = "isSpecial" class="info"> Angular Tutorial </h2> 
     <h2 class="info"> Angular Tutorial </h2> 
     <h2 [ngClass]='multiClass'> Angular Tutorial data binding </h2>
     
  `,
  styles: [`
     
     .info{
       color: blue;
     }
     .danger {
      color: red ; 
     }
     .format_text {
       text-decoration: underline;
       font-size: 30px
     }

  `]
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  public myuid = "fullname"
  public myFisrtId = "username"
  public infoClass = true
  public dangerClass = false
  public isSpecial = true
  public multiClass = {
    "danger"  : !this.dangerClass,    // false
    "info"  : this.infoClass,       // true
    "format_text" : this.isSpecial    // true
  }


  ngOnInit(): void {
  }

}
