import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs//operators';
import { environment } from '../../../../environments/environment';
import { Group, Participant } from '../../models/assign participant';

@Injectable({
  providedIn: 'root',
})
export class PanitiaService {
  header = new HttpHeaders().set('Content-Type', 'application/json');
  dataPanita = {};
  ACCESS_TOKEN = 'access_token';
  constructor(
    private httpClinet: HttpClient,
    private authService: AuthService
  ) {}

  private getDataParticipant(response: any) {
    return response.data;
  }

  private panitiaDataId(response: any) {
    return response.data;
  }

  // createGame(
  //   tournamentName: string, groupEntry:boolean, finished: boolean,
  //   tournamentOpen: Date, tournamentStart: Date, tournamentClose: Date,
  //   tournamentType: string, stageName: number, tournamentPict:File,
  //   tournamentDescription: string
  // ): Observable<any> {
  //   let formData:any = new FormData();
  //   formData.append("tournamentName", tournamentName);
  //   formData.append("groupEntry", groupEntry);
  //   formData.append("finished", finished);
  //   formData.append("tournamentOpen", tournamentOpen);
  //   formData.append("tournamentStart",tournamentStart);
  //   formData.append("tournamentClose", tournamentClose);
  //   formData.append("tournamentType", tournamentType);
  //   formData.append("stageName", stageName);
  //   formData.append("tournamentPict", tournamentPict);
  //   formData.append("tournamentDescription", tournamentDescription)
  //   return this.httpClinet.post(
  //     `${environment.urlAddress}comittee/createGame`,
  //     formData, {
  //       headers: new HttpHeaders().set(this.ACCESS_TOKEN,this.authService.getToken()),
  //       reportProgress: true,
  //       observe: 'events',
  //     });
  // }

  createGame(data: any) {
    return this.httpClinet.post(
      `${environment.urlAddress}comittee/createGame`,
      data,
      {
        headers: new HttpHeaders().set(
          this.ACCESS_TOKEN,
          this.authService.getToken()
        ),
      }
    );
  }

  createRule(
    minParticipant: number,
    maxParticipant: number,
    age: number
  ): Observable<any> {
    let formData: any = new FormData();
    formData.append('minParticipant', minParticipant);
    formData.append('maxParticipant', maxParticipant);
    formData.append('age', age);
    return this.httpClinet.post(
      `${environment.urlAddress}comittee/createRules`,
      formData,
      {
        headers: new HttpHeaders().set(
          this.ACCESS_TOKEN,
          this.authService.getToken()
        ),
      }
    );
  }

  assignPart(part: Participant): Observable<any> {
    return this.httpClinet.put<any>(
      `${environment.urlAddress}/comittee/approve`,
      part,
      {
        headers: new HttpHeaders().set(
          this.ACCESS_TOKEN,
          this.authService.getToken()
        ),
      }
    );
  }
  assignGroup(group: Group): Observable<any> {
    return this.httpClinet
      .put<any>(`${environment.urlAddress}/comittee/approveGroup`, group, {
        headers: new HttpHeaders().set(
          this.ACCESS_TOKEN,
          this.authService.getToken()
        ),
      })
      .pipe(map((result) => true));
  }
  kickPart(part: Participant): Observable<any> {
    return this.httpClinet
      .put<any>(`${environment.urlAddress}/comittee/kickParticipant`, part, {
        headers: new HttpHeaders().set(
          this.ACCESS_TOKEN,
          this.authService.getToken()
        ),
      })
      .pipe(map((result) => true));
  }
  KickGroup(group: Group): Observable<any> {
    return this.httpClinet
      .put<any>(`${environment.urlAddress}/comittee/kickGroup`, group, {
        headers: new HttpHeaders().set(
          this.ACCESS_TOKEN,
          this.authService.getToken()
        ),
      })
      .pipe(map((result) => true));
  }
}
