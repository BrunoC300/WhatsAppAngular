import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-history-chat',
  templateUrl: './history-chat.component.html',
  styleUrls: ['./history-chat.component.css']
})
export class HistoryChatComponent implements OnInit {

  @Input() avatar?: string;
  @Input() name?: string;
  @Input() message?: string;
  @Input() date?: string;


  constructor() { }

  ngOnInit(): void {
  }

}
