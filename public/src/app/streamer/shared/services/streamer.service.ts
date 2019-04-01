import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
@Injectable({
  providedIn: 'root'
})
export class StreamerService {

  constructor(
    protected cookieService:CookieService
  ) { }
  public save(id:string,email:string,token:string,username:string){
    this.cookieService.set("streamer_id",id);
    this.cookieService.set("streamer_email",email);
    this.cookieService.set("streamer_token",token);
    this.cookieService.set("streamer_username",username);
  }
  public getId():string{
    return this.cookieService.get("streamer_id");
  }
  public isAuthenticated() : boolean {
		return !!this.getToken();
	}
	
  public getEmail():string{
    return this.cookieService.get("streamer_email");
  }
  public getToken():string{
    return this.cookieService.get("streamer_token");
  }
  public getUsername():string{
    return this.cookieService.get("streamer_username");
  }
  public removeAll(){
 
    this.save('','','','');

  }
}
