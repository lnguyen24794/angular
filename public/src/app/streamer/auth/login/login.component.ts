import { Component, OnInit } from '@angular/core';
import {StreamerService} from "../../shared/services/streamer.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email:string;
  public password:string;
  public message:string;
  constructor(
    private streamerService:StreamerService,
    public router:Router
  ) { }

  ngOnInit() {
  }

  login(){
    if(this.email=='lnguyen24794@gmail.com'&&this.password=='123456'){
      this.streamerService.save("1",'lnguyen24794@gmail.com','123456','lnguyen24794');
      console.log(this.streamerService.getEmail());
      this.router.navigate(['/streamers']);
      this.message='';
    }else{
      this.message="Email hoặc mật khẩu chưa đúng";
    }
  }
}
