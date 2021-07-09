import { Injectable } from '@angular/core';
import { CHATS } from './mock-chats';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor() { }

  getChats() {
    return CHATS;
  }

  getCurrentChat() {
    return CHATS.find(chat => chat.isActive);
  }

}
