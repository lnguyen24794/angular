import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';

import {InterpreterService} from "../shared/services/interpreter.service";


@Injectable({
  providedIn: 'root'
})
export class InterpreterGuard implements CanActivate {
  constructor(
    public router:Router,
    public interpreterService:InterpreterService
  ){
  }
  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    
    const auth  = this.interpreterService.getToken();
    console.log(auth);
    if(auth!=''){
      return true;
    }
    this.router.navigate(['interpreters/auth/login']);
    return false;
  }
}
