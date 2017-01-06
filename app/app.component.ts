import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>My First {{ desc }}</h1>
              <div (click)="onDivClick">
                <button (click)="onClick($event)">Submit</button>
              </div>
              <input type="text" [value]="title" (input)="title = $event.target.value" /> 
              <input type="button" (click)="title = ''" value="Clear" />
              preview: {{ title }} 
             `
})
export class AppComponent { 

  desc = "Real Angular Application";

  title = "Angular App (NG-Stings)"; 

  onDivClick(){
    console.log("Handled by Div");
  }

  onClick($event){
    console.log("Clicked", $event);
  }
}
