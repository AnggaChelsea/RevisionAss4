import { AuthService } from '../../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { InboxService } from '../../../shared/services/inbox.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
})
export class InboxComponent implements OnInit {
  newMessage: boolean[] = [];
  inboxes: string[] = [];
  constructor(
    private inboxService: InboxService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.seeInbox();
  }

  seeInbox() {
    this.inboxService
      .getInbox()
      .toPromise()
      .then((data) => {
        for (let key in data.message) {
          this.newMessage = data.message[key].read;
          this.inboxes.push(data.message[key]);
        }
        // console.log(this.inboxes);
      });
  }
}
