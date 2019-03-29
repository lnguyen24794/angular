import { Component, OnInit } from '@angular/core';

import {StreamerService} from "../../shared/services/streamer.service";
import {RestFulService} from "../../shared/services/restFul.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email:string='';
  public password:string='';
  public message:any[]=[];
  constructor(
    private streamerService:StreamerService,
    public router:Router,
    public restfulService:RestFulService
  ) { 
    if(streamerService.getId()!=''){
      this.router.navigate(['/streamers/list']);
    }

  }

  ngOnInit() {
  }

  login(){
    let data = {
      email:this.email,
      password:this.password
    }
    this.restfulService.streamerLogin(data).subscribe(data=>{
      console.log(data);
      if(data.success){
        this.streamerService.save(data.data.id,data.data.email,data.data.api_token,data.data.username);
        this.router.navigate(['/streamers']);
        this.message=[];
      }else{
        if(typeof data.error=='string'){
          this.message= new Array(data.error);
        }else{
          this.message=data.error;
        }
        
      }
    });
    
   
  }
}
