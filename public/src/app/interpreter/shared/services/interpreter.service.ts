import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
@Injectable({
  providedIn: 'root'
})
export class InterpreterService {

  constructor(
    protected cookieService:CookieService
  ) { }

  public save(id:any,username:string,api_token:string,email:string){
    this.cookieService.set("interpreter_id",id);
    this.cookieService.set("interpreter_username",username);
    this.cookieService.set("interpreter_email",email);
    this.cookieService.set("interpreter_token",api_token);
  }

  public getId():string{
    return this.cookieService.get("interpreter_id");
  }

  public getUsername():string{
    return this.cookieService.get("interpreter_username");
  }

  public getEmail():string{
    return this.cookieService.get("interpreter_email");
  }

  public getToken():string{
    return this.cookieService.get("interpreter_token");
  }

  public removeAll(){
    this.cookieService.delete("interpreter_id");
    this.cookieService.delete("interpreter_username");
    this.cookieService.delete("interpreter_token");
    this.cookieService.delete("interpreter_email");
  }
}
