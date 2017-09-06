import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @Output() sendMessage: EventEmitter<string>

  content: string;

  constructor() {
    this.sendMessage = new EventEmitter<string>();
  }

  send() {
    this.sendMessage.emit(this.content);
    this.content = "";
  }
}
