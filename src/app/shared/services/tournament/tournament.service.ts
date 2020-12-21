import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private httpClient: HttpClient) { }

  private getDataTournament(response:any){
    return response.data
  }



  private getDataTournamentId(response:any) {
    return response.data
  }


  readAll(): Observable<any> {
    return this.httpClient.get(environment.urlAddress + 'product').pipe(map(this.getDataTournament))
  }

  read(id:number): Observable<any> {
    return this.httpClient.get(`${environment.urlAddress}/tournament${id}`);
  }

  create(data:any): Observable<any> {
    return this.httpClient.post(environment.urlAddress, data);
  }

  update(id:number, data:any): Observable<any> {
    return this.httpClient.put(`${environment.urlAddress}/${id}`, data);
  }

  delete(id:number): Observable<any> {
    return this.httpClient.delete(`${environment.urlAddress}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(environment.urlAddress);
  }

  searchByName(name:any): Observable<any> {
    return this.httpClient.get(`${environment.urlAddress}?name=${name}`);
  }
}
