import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../service/chat.service';
import {map, tap} from 'rxjs/operators';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  constructor(private _chatService: ChatService) { }

  messages;
  newMessage;
  
  ngOnInit() {
   this.messages =  this._chatService.getMessages();
  }

  sendMessage(){
    console.log(this.newMessage);
    
    this.newMessage = "";
  }


}
