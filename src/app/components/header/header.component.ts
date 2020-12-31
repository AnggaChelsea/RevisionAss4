import { InboxService } from './../../shared/services/inbox.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  newMessage: number = 0;
  isAdmin: boolean = false;
  isHeadChief: boolean = false;
  isPanitia: boolean = false;
  isParticipant: boolean = false;
  isUser: boolean = false;
  constructor(
    public authService: AuthService,
    private inboxService: InboxService
  ) {}

  ngOnInit(): void {
    this.seeNotification();
    this.authorization();
  }

  authorization() {
    this.authService
      .getUser()
      .toPromise()
      .then((data) => {
        if (data.role === 'admin') {
          this.isAdmin = true;
        } else if (data.role === 'headchief') {
          this.isHeadChief = true;
        } else if (data.role === 'comittee') {
          this.isPanitia = true;
        } else if (data.role === 'participant') {
          this.isParticipant = true;
        } else if (data.role === 'user') {
          this.isUser = true;
        }
      });
  }

  seeNotification() {
    this.inboxService
      .getNotification()
      .toPromise()
      .then((data) => {
        this.newMessage = data.message;
      });
  }
}
