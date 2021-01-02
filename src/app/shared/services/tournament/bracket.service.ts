import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BracketService {

  constructor(private httpClient:HttpClient) { }


  private getDataBracket(response:any){
    return response.data
  }

  getBracket(): Observable<any>{
    return this.httpClient.get<any>(environment.urlAddress + 'product').pipe(map(this.getDataBracket));
  }

}
