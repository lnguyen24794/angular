import { Component, OnInit } from '@angular/core';
import {RestFulService} from "../shared/services/restFul.service";
import {Router,ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public id:number;
  public loading=true;
  private data:any;
  public message:any[]= new Array();
  public streamer:any;
  private password:string='';
  constructor(
    public restfullService:RestFulService,
    public activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async data=>{
      this.id=data.id;
      this.loading=true;
      await this.restfullService.getStreamerById(this.id).subscribe(rs=>{
          this.streamer=rs.data;
          this.loading=false;
      })
    })
  }
  edit(){
    if(this.password==''){
      this.data={
        username:this.streamer.username,
        email:this.streamer.email
      }
    }else{
      this.data={
        username:this.streamer.username,
        email:this.streamer.email,
        password:this.password
      }
    }
    this.restfullService.editStreamer(this.id,this.data).subscribe(data=>{
      if(data.success){
        this.message= new Array('Cập nhật thành công');
      }else{
        this.message=data.error;
      }
    })
  }
}
