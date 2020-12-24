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

//4b795c000aa4ef0d9a0d5cf8998da1d7153fa538
  //22 october video

  readAll(): Observable<any> {
    return this.httpClient.get(environment.urlAddress + 'product').pipe(map(this.getDataTournament))
  }

  read(_id:string): Observable<any> {
    return this.httpClient.get(`${environment.urlAddress}product/${_id}`).pipe(map(this.getDataTournament));
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
