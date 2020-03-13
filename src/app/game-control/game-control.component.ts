import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() countObject = new EventEmitter<{index:number, type:string}>();
  index:number=null;
  timer:any;

  constructor() { }

  ngOnInit(): void {
  }

  startTimer(){
    this.timer=setInterval(() => {this.index++},1000);
  }

  stopTimer(){
    clearInterval(this.timer);
  }

  ngDoCheck(){
    if( this.index > 0){
      this.countObject.emit({
        index:this.index,
        type:this.index%2==0 ? 'even' : 'odd'
      });
    }
    
  }

}
