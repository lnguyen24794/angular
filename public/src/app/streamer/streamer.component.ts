import { Component, OnInit } from '@angular/core';
import {StreamerService} from "./shared/services/streamer.service";
import {RestFulService} from "./shared/services/restFul.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-streamer',
  templateUrl: './streamer.component.html',
  styleUrls: ['./streamer.component.scss']
})
export class StreamerComponent implements OnInit {

  constructor(
    private streamerService:StreamerService,
    private router:Router,
    private restfulService:RestFulService
  ) { }

  ngOnInit() {
    
  }
   async logout(){

    await this.restfulService.logoutStreamer().subscribe(data=>{
      if(!data.success){
        console.log("Logout is fail");
      }else{
        console.log("Success");
      }
    });
    this.streamerService.removeAll();
    console.log(this.streamerService.getToken());
    this.router.navigate(["/streamer/auth/login"]);
  }
}
