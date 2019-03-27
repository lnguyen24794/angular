import { Component, OnInit } from '@angular/core';
import {RestFulService} from "../shared/services/restFul.service";
import {Router,ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public username:string;
  public email:string;
  public streamers:any[];
  constructor(
    public restFulService:RestFulService,
    public routerService:Router,
    public activatedRoute:ActivatedRoute
    ) { 
    
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data=>{
      let username = data.username?data.username:'';
      let email = data.email?data.email:'';
      this.username=username;
      this.email = email;
 
      this.streamers=this.restFulService.list(username,email);
    })
   
    
  }
  search(){
    this.routerService.navigate(['/streamers/list'],{queryParams:{username:this.username?this.username:'',email:this.email?this.email:'' }});
  }
}
