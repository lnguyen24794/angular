import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import {StreamerService} from "./services/streamer.service";

@Injectable()
  export class StreamerAuthGuard implements CanActivate {
    constructor(
      public router:Router,
      public streamerService:StreamerService
    ){}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      
      console.log(this.streamerService.getToken());
      
      if(this.streamerService.getToken()==''){
        this.router.navigate(['streamers/auth/login']);
        return false;
      }
      return true;
  	}

  }