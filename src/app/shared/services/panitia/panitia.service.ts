import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs//operators';
import { environment } from '../../../../environments/environment';

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

}
