import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  info: any = {};

  constructor(private chatsService: ChatsService) { }

  ngOnInit(): void {
    this.info = this.chatsService.getCurrentChat();
  }

}
