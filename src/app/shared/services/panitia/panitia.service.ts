import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs//operators';
import { environment } from '../../../../environments/environment';
import { Group, Participant } from '../../models/assign participant';

@Injectable({
  providedIn: 'root'
})
export class PanitiaService {

  constructor(private httpClinet:HttpClient) { }

  private getDataParticipant(response:any){
    return response.data
  }

  private panitiaDataId(response:any){
    return response.data
  }

  getData():Observable<any>{
    return this.httpClinet.get(environment.urlAddress + 'product').pipe(map(this.getDataParticipant))
  }

  assignPart(part:Participant) :  Observable<any>  {
    return this.httpClinet.put<any>(`${environment.local}/comittee/approve`,part).pipe(map(result =>  true))
  }
  assignGroup(group:Group) :  Observable<any>  {
    return this.httpClinet.put<any>(`${environment.local}/comittee/approveGroup`,group).pipe(map(result =>  true))
  }
  kickPart(part:Participant) :  Observable<any>  {
    return this.httpClinet.put<any>(`${environment.local}/comittee/kickParticipant`,part).pipe(map(result =>  true))
  }
  KickGroup(group:Group) :  Observable<any>  {
    return this.httpClinet.put<any>(`${environment.local}/comittee/kickGroup`,group).pipe(map(result =>  true))
  }
}
