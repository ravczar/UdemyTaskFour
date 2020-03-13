import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbersReceived:Array <{index:number, type:string}> = new Array();

  ngOnInit():void{
    this.numbersReceived.push({index: 0, type:'even'});
  }

  receivedCountObject(receivedCount: {index:number, type:string}){
    this.numbersReceived.push(receivedCount);
  }
}
