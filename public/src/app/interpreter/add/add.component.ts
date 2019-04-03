import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
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
    private formBuilder:FormBuilder
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
    this.formAdd.valueChanges.subscribe(data=>{
      console.log(data);
    })
  }
  onSubmit(){

    console.log(this.formAdd.value);
    
  }
  onReset(){
    this.formAdd.reset();
  }
  selectedFile(event){
    this.file=event.target.files[0];
    const reader = new FileReader();
  
    reader.readAsDataURL(this.file);
    reader.onload=e=> this.image=reader.result;
    
  }
}
