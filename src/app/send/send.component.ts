import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss'],
})
export class SendComponent  implements OnInit {
  @Output() create:EventEmitter<any>=new EventEmitter()
  newMessage:any

  constructor() { }

  ngOnInit() {}

  addMessage(){
    this.create.emit(this.newMessage)
    this.newMessage=""
  }
}
