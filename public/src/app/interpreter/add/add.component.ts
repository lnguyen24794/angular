import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {RestFulService} from "../shared/services/rest-ful.service";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public interpreter:any={
    username:'',
    password:'',
    email:''
  };
  public file:any=null;
  public formAdd: FormGroup;
  public message:any[];
  public loading=false;
  public image:any;
  constructor(
    private formBuilder:FormBuilder,
    private restfulService:RestFulService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.formAdd = this.formBuilder.group({
      username:['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ]],
      password:['',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]],
      email:['',[
        Validators.required,
        Validators.email,
        Validators.maxLength(255)
      ]],
      avatar:['',[
        Validators.required
      ]]
    });
  }
  onSubmit(){
    const fd = new FormData();
    fd.append('avatar',this.file,this.file.name)
    console.log(this.formAdd.value);
    this.restfulService.uploadFile(fd).subscribe(data=>{
      console.log(data);
    });
  }
  onReset(){
    this.formAdd.reset();
  }
  selectedFile(event){
    console.log(event.target.files[0]);
    if(event.target.files[0]!=undefined){
      this.file=event.target.files[0];
      const reader = new FileReader();
  
      reader.readAsDataURL(this.file);
      reader.onload= e=> { this.image=reader.result };
    }
    
  }
}
