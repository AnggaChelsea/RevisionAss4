import { Observable } from 'rxjs';

export interface GetResponseGame {
  page:{
    size:number,
    totalElement:number,
    totalPages:number,
    number:number
  }
}
