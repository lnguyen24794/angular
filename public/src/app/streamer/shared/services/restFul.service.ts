import {Injectable} from "@angular/core";
import {HttpClient,HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import {StreamerService} from "./streamer.service";
@Injectable()
export class RestFulService{
    constructor(
        private http:HttpClient,
        private streamerService:StreamerService
    ){
    }

     list(search?:any,current_page?:any):Observable<any>{
        let prs = new HttpParams().set('keyword',search).set('page',current_page);
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
    addStreamer(data:any):Observable<any>{
        let option = {
            headers: new HttpHeaders({
                'Content-type':"Application/json",
                'Authorization':"Bearer "+this.streamerService.getToken(),
                'Accept':'application/json'
            })
        }
        return this.http.post("https://localhost:8080/api/streamers/add",data,option);
    }
    getStreamerById(id:number):Observable<any>{
        //rest api
        let option = {
            headers: new HttpHeaders(
                {
                    'Content-type':"Application/json"
                }
            )
        }
        return  this.http.get<any>('https://localhost:8080/api/manager/streamers/detail/'+id,option);
    }

    editStreamById(data:any):Observable<any>{

        let option = {
            headers: new HttpHeaders(
                {
                    'Content-type':"Application/json",
                    'Authorization':"Bearer "+this.streamerService.getToken(),
                    'Accept':'application/json'
                }
            )
        }
        return  this.http.put<any>('https://localhost:8080/api/manager/streamers/list',data,option);
    }

    streamerLogin(data:any):Observable<any>{
        
        let option = {
            headers: new HttpHeaders(
                {
                    'Content-type':"Application/json"
                }
            )
        }
        return this.http.post<any>('https://localhost:8080/api/streamers/login',data,option);
    }
    editStreamer(id:number,data:any):Observable<any>{
        let option = {
            headers: new HttpHeaders(
                {
                    'Content-type':"Application/json",
                    'Authorization':'Bearer '+this.streamerService.getToken(),
                    'Accept':'application/json'
                }
            )
        }
        return this.http.post<any>('https://localhost:8080/api/streamers/edit/'+id,data,option);
    }
    logoutStreamer(id,token):Observable<any>{
        let option = {
            headers: new HttpHeaders({
                'Content-type':'Application/json',
                'Authorization':'Bearer '+token,
                'Accept':'appilcation/json'
            }),

        }
        return this.http.get<any>('https://localhost:8080/api/streamers/logout?id='+id,option);
    }
    removeStreamer(id:any):Observable<any>{
        let option = {
            headers: new HttpHeaders({
                'Content-type':'Application/json',
                // 'Authorization':'Bearer '+this.streamerService.getToken(),
                // 'Accept':'appilcation/json'
            })
        }
        return this.http.post<any>('https://localhost:8080/api/manager/streamers/delete/'+id,option);
    }
}