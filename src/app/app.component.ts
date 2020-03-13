import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberReceived: {index:number, type:string};

  ngOnInit():void{
    this.numberReceived = {index: 0, type:'even'};
  }

  receivedCountObject(receivedCount: {index:number, type:string}){
    this.numberReceived = receivedCount;
  }
}
