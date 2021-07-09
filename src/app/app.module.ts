import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { ChatComponent } from './chat/chat.component';
import { HistoryChatComponent } from './history-chat/history-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    ChatComponent,
    HistoryChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
