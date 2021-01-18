import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  data = {};
  ACCESS_TOKEN = 'access_token';
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  private getDataTournament(response: any) {
    return response.data;
  }

  private getDataTournamentId(response: any) {
    return response.data;
  }
  readAll(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.urlAddress}user/tournaments`
    );
  }

  read(_id: any): Observable<any> {
    return this.httpClient.get(
      `${environment.urlAddress}user/tournamentdetail/${_id}`
    );
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(
      `${environment.urlAddress}comittee/createGame`,
      data
    );
  }

  update(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${environment.urlAddress}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.urlAddress}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(environment.urlAddress);
  }

  searchByName(i: any): Observable<any> {
    return this.httpClient.get(
      `${environment.urlAddress}user/tournaments?i=${i}`
    );
  }

  getAll(page: any) {
    return this.httpClient.get(
      `${environment.urlAddress}user/tournaments?page=${page}`
    );
  }

  getProfile() {
    return this.httpClient.get(`${environment.urlAddress}user/profile`, {
      headers: new HttpHeaders().set(
        this.ACCESS_TOKEN,
        this.authService.getToken()
      ),
    });
  }

  getGroup() {
    return this.httpClient.get(`${environment.urlAddress}user/group`, {
      headers: new HttpHeaders().set(
        this.ACCESS_TOKEN,
        this.authService.getToken()
      ),
    });
  }

  registerTournamentPerson(tournamentName: any) {
    return this.httpClient.post<any>(
      `${environment.urlAddress}user/submit`,
      tournamentName,
      {
        headers: new HttpHeaders().set(
          this.ACCESS_TOKEN,
          this.authService.getToken()
        ),
      }
    );
  }

  registerTournamentGroup(tournamentName: any) {
    return this.httpClient.post<any>(
      `${environment.urlAddress}user/submitGroup`,
      tournamentName,
      {
        headers: new HttpHeaders().set(
          this.ACCESS_TOKEN,
          this.authService.getToken()
        ),
      }
    );
  }

  // getBranches() {
  //   return this.httpClient.get(
  //     `${environment.urlAddress}comittee/startBranches`,
  //     {
  //       headers: new HttpHeaders().set(
  //         this.ACCESS_TOKEN,
  //         this.authService.getToken()
  //       ),
  //     }
  //   );
  // }

  startFFA(datas: any) {
    return this.httpClient.put(
      `${environment.urlAddress}comittee/startFreeForAll`,
      datas,
      {
        headers: new HttpHeaders().set(
          this.ACCESS_TOKEN,
          this.authService.getToken()
        ),
      }
    );
  }

  endFFA(_id: any) {
    return this.httpClient.put(
      `${environment.urlAddress}comittee/endFreeForAll`,
      _id,
      {
        headers: new HttpHeaders().set(
          this.ACCESS_TOKEN,
          this.authService.getToken()
        ),
      }
    );
  }

  getFFA(id: any): Observable<any> {
    return this.httpClient.get(`${environment.urlAddress}user/FFA/${id}`);
  }

  getBranches(id: any): Observable<any> {
    return this.httpClient.get(`${environment.urlAddress}user/Branches/${id}`);
  }

  putScore(datas: any) {
    return this.httpClient.put(
      `${environment.urlAddress}comittee/putScore`,
      datas,
      {
        headers: new HttpHeaders().set(
          this.ACCESS_TOKEN,
          this.authService.getToken()
        ),
      }
    );
  }

  hallOfFame() {
    return this.httpClient.get(`${environment.urlAddress}halloffame`);
  }

  putBranchScore(datas: any) {
    return this.httpClient.put(
      `${environment.urlAddress}comittee/putBranchScore`,
      datas,
      {
        headers: new HttpHeaders().set(
          this.ACCESS_TOKEN,
          this.authService.getToken()
        ),
      }
    );
  }

  startBranch(datas: any) {
    return this.httpClient.put(
      `${environment.urlAddress}comittee/startBranches`,
      datas,
      {
        headers: new HttpHeaders().set(
          this.ACCESS_TOKEN,
          this.authService.getToken()
        ),
      }
    );
  }

  finishBranch(datas: any) {
    return this.httpClient.put(
      `${environment.urlAddress}comittee/finishBranches`,
      datas,
      {
        headers: new HttpHeaders().set(
          this.ACCESS_TOKEN,
          this.authService.getToken()
        ),
      }
    );
  }

  //  getPage(page:any, title:any): Observable<any> {
  //   return this.httpClient.get(`${environment.urlAddress}user/tournaments?page=${page}&i=${title}`);
  // }
}
