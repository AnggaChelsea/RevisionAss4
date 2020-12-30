import { InboxService } from './../../shared/services/inbox.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private inboxService: InboxService
  ) {}

  ngOnInit(): void {}

  seeNotification() {
    this.inboxService
      .getNotification()
      .toPromise()
      .then((data) => {
        console.log(data);
      });
  }
}
