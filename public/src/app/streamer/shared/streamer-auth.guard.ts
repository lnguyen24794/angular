import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import {StreamerService} from "./services/streamer.service";

@Injectable()
  export class StreamerAuthGuard implements CanActivate {
    constructor(
      public router:Router,
      public streamerService:StreamerService
    ){}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.streamerService.getToken()==''){
        this.router.navigate(['streamer/auth/login']);
        return false;
      }
      return true;
  	}

  }