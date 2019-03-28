import {Injectable} from "@angular/core";
import {HttpClient,HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class RestFulService{
    constructor(
        private http:HttpClient
    ){
    }

     list(search?:any,current_page?:any):Observable<any>{
        let prs = new HttpParams().set('keyword',search).set('page',current_page);
        
        console.log(prs);
        let option = {
            headers: new HttpHeaders(
                {
                    'Content-type':"Application/json"
                }
            ),
            params: prs
        }
        return  this.http.get<any>('https://localhost:8080/api/manager/streamers/list',option);
    }

    getStreamerById(id:number){
        //rest api
        let data = `{
            "id": 14,
            "username": "Ashleigh Conn",
            "email": "bernard67@example.com",
            "created_at": "2019-03-21 16:00:15",
            "updated_at": "2019-03-21 16:00:15"
        }`;
        return  JSON.parse(data);
    }
}