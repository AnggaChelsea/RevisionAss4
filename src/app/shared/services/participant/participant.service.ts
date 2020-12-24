import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private httpClient:HttpClient) { }

  private getDataParticipant(response:any){
    return response.data
  }

  private getDataParticipantId(id:any){
    return id.data
  }

  readAllParticipant():Observable<any>{
    return this.httpClient.get(environment.urlAddress + 'product').pipe(map(this.getDataParticipant));
  }


}
