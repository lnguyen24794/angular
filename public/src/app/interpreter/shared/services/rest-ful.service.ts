import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient,HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestFulService {

  constructor(
    private http: HttpClient,

  ) { }
  public interpreterLogin(data:any):Observable<any>{
        
    let option = {
        headers: new HttpHeaders(
            {
                'Content-type':"Application/json"
            }
        )
    }
    return this.http.post<any>('https://localhost:8080/api/interpreters/login',data,option);
}
}
