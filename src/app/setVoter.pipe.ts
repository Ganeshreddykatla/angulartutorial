import { Pipe, PipeTransform } from "@angular/core";

@Pipe (
    {
        name : "setVoter"
    }
)
export class setVoterPipe implements PipeTransform {
     transform(value:string):string{
        if(value == "1") return "voter is Valid"
        else return "Voter is Not Valid"
     }
}