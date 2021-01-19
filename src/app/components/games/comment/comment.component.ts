import { Component, OnInit } from '@angular/core';

interface ComponentEvent {
  name: string;
  timestamp: string;
}

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  public events: ComponentEvent[] = [];
  public editorConfig = {
    
    toolbar: [
      ['Source'],
      ['Style', 'Format', 'FontSize'],
      ['bold', 'Italic'],
      ['Undo', 'Redo'],
      ['About'],
      ['Emoji'],
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  clearEventsLog(): void {
    this.events.length = 0;
  }

  onReady(): void {
    this.logEvent('ready');
  }

  onChange(): void {
    this.logEvent('change');
  }

  onFocus(): void {
    this.logEvent('focus');
  }

  onBlur(): void {
    this.logEvent('blur');
  }

  private logEvent(eventName: string): void {
    if (this.events.length > 19) {
      this.events.pop();
    }

    const eventData = {
      name: eventName,
      timestamp: this.getCurrentTimestamp(),
    };

    this.events.unshift(eventData);

    console.log(eventData.timestamp, eventData.name, event);
  }

  private getCurrentTimestamp() {
    return new Intl.DateTimeFormat('en', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(new Date());
  }
}
