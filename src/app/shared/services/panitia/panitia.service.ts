import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs//operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanitiaService {

  header = new HttpHeaders().set('Content-Type', 'application/json');
  dataPanita = {};
  ACCESS__TOKEN = 'access_token';

  constructor(private httpClinet:HttpClient, private authService:AuthService) { }

  private getDataParticipant(response:any){
    return response.data
  }

  private panitiaDataId(response:any){
    return response.data
  }

  createTournament(data:any): Observable<any>{
    return this.httpClinet.post(
      `${environment.urlAddress}comittee/createGame`,
      data,{}
    );
  }

  // getData():Observable<any>{
  //   return this.httpClinet.get(environment.urlAddress + 'chief/participantlist').pipe(map(this.getDataParticipant))
  // }

  createRule(data:any) :Observable<any>{
   return this.httpClinet.post(`${environment.urlAddress}comittee/createRules`,
   data)
  }



}
