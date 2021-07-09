import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../chats.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  chats: any = [];

  user = {
    avatar: 'https://placeimg.com/640/480/people',
    name: 'Nuno Pereira'
  };

  constructor(private chatsService: ChatsService) { }

  ngOnInit(): void {
    this.chats = this.chatsService.getChats();
  }

}
