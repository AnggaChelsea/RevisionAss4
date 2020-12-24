import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InboxService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const url = 'http://localhost:5000/user/jesting';
    return this.http.get<any>(url);
  }
}
