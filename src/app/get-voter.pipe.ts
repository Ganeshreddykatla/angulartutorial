import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getVoter'
})
export class GetVoterPipe implements PipeTransform {
 
  transform(value:string):string{
    debugger
    if(value == "1") return "voter is Valid"
    else return "Voter is Not Valid"
 }

}
