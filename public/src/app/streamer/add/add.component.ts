import { Component, OnInit } from '@angular/core';
import {RestFulService} from "../shared/services/restFul.service";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public message:any[];
  public streamer:any={
    username:'',
    email:'',
    password:''
  }
  constructor(
    public restfulService:RestFulService
  ) { }

  ngOnInit() {
  }

  doAdd(){
    this.restfulService.addStreamer(this.streamer).subscribe(data=>{
      console.log(data);
      if(data.succes){
        this.message= new Array("Thêm thành công");
      }else{
        this.message= data.error;
      }
    })
  }
}
