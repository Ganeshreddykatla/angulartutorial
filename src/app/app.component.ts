import { Component } from '@angular/core';

@Component({
  selector: 'app-app1',   ///   connection for the app -root template
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorial ';

  public  inputToChild = "this is a Parent to Child Communication"

  public message = ""

  public userData = [{
     name : "ganesh",
     age   : "28",
     checkVoter : "1"
     
  },
  {
    name : "Pradeep",
    age   : "27",
    checkVoter : "1"
    
 },
 {
  name : "nag",
  age   : "15",
  checkVoter : "0"
  
},
{
  name : "Prasanna",
  age   : "12",
  checkVoter : "0"
  
}
]
  public myDate = new Date();
}
