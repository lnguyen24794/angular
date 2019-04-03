import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {RestFulService} from "../../shared/services/rest-ful.service";
import {InterpreterService} from "../../shared/services/interpreter.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup;
  public message:any[];

  constructor(
    private formBuilder:FormBuilder,
    private restfullService:RestFulService,
    private interpreterService:InterpreterService,
    private router : Router
  ) { 
    if(interpreterService.getId()!=''){
      this.router.navigate(['/interpreters/list']);
    }
  }

  ngOnInit() {
   
    this.create();
  }
  create(){
    this.loginForm =  this.formBuilder.group(
     {
      
        email:['',[
            Validators.required,Validators.minLength(10),Validators.maxLength(255),Validators.email
          ]]
        ,
      
        password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(50)]]
        
       
     }
    )
  }

  onSubmit(){
    const data = this.loginForm.value;
    this.restfullService.interpreterLogin(data).subscribe(res =>{
      if(res.success){
        this.interpreterService.save(res.data.id,res.data.username,res.data.api_token,res.data.email);
        this.router.navigate(['/interpreters/list']);
      }else{
        if(typeof res.error=='string'){
          this.message= new Array(res.error);
        }else{
          this.message=res.error;
        }
      }
    })
    
  }
  demo(ele){
    console.log(ele);
  }
}
