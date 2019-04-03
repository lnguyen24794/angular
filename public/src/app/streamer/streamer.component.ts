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
   logout(){
     const  id =  this.streamerService.getId();
     const token = this.streamerService.getToken();
     this.streamerService.removeAll();
     this.restfulService.logoutStreamer(id,token).subscribe(data=>{
      console.log(data);
      if(!data.success){
        console.log("Logout is fail");
      }else{
        console.log("Success");
      }
    });
    this.router.navigate(["/streamers/auth/login"]);
  }
}
