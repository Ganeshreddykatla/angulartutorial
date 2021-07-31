import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',    /// connection for view in browser
  template: `
  <div>
 
  <h2 class id >{{page_title}} </h2>   
  <h2>{{2+2 }}</h2>
  <h2> {{page_title.length}}</h2>
  <h3> {{page_title.toUpperCase()}} </h3>
  <h2> {{getTitle()}}</h2>
    
  <input type="text" value="ganesh">


  </div>
  `,   /// view
  styleUrls: ['./user.component.css']     //style sheet for component
})
export class UserComponent implements OnInit {

  public page_title = "this is user component"


  constructor() { }

  ngOnInit(): void {

  }
  getTitle() {
    return "hello Angular"
  }

}
