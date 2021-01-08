import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  // newMessage: boolean[] = [];
  inboxes: string[] = [];
  length: number = 0;

  //
  pic: any = null;
  upload: FormGroup;
  testUpload: any = {};

  constructor(
    private inboxService: InboxService,
    private authService: AuthService,

    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.upload = this.fb.group({
      test: [''],
    });
  }

  ngOnInit(): void {
    this.seeInbox();
  }
  //

  onFileSelected(event: any) {
    this.pic = <File>event.target.files[0];
  }

  onUpload() {
    const value: any = this.upload.value;
    this.testUpload = {
      test: value.test,
    };

    const fd = new FormData();
    fd.append('pic', this.pic, this.pic.name);
    fd.append('test', this.testUpload.test);

    this.http
      .post(`${environment.urlAddress}user/tester`, fd)
      .subscribe((res) => console.log(res));
  }

  //
  seeInbox() {
    this.inboxService
      .getInbox()
      .toPromise()
      .then((data) => {
        for (let key in data.message) {
          // this.newMessage = data.message[key].read;
          this.inboxes.push(data.message[key]);
        }
        this.length = data.length;
      });
  }
}
