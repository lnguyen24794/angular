import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {InterpreterService} from "./shared/services/interpreter.service";
@Component({
  selector: 'app-interpreter',
  templateUrl: './interpreter.component.html',
  styleUrls: ['./interpreter.component.scss']
})
export class InterpreterComponent implements OnInit {

  constructor(
    public router:Router,
    public interpreterService:InterpreterService
  ) { }

  ngOnInit() {
  }
  logout(){
    this.interpreterService.removeAll();
    this.router.navigate(['/interpreters/auth/login']);
  }
}
