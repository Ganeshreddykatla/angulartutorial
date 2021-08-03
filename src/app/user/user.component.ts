import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';



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
   <h2> {{parentData}} </h2>

   <button (click) =childCommunicate() > Send Data To Parent </button>
  </div>
  `,   /// view
  styleUrls: ['./user.component.css']     //style sheet for component
})
export class UserComponent implements OnInit {

  public page_title = "this is user component"


  @Input('parent_data') public parentData ;

  @Output() public childAction = new EventEmitter;
  constructor() { }

  ngOnInit(): void {

  }
  getTitle() {
    return "hello Angular"
  }
  childCommunicate() {
    this.childAction.emit('hai parent, good morning. IAM YOUR CHILD')
  }

}
