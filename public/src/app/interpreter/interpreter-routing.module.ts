import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InterpreterComponent} from "./interpreter.component";
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './auth/login/login.component';
import {InterpreterGuard} from "./shared/interpreter.guard";

const routes: Routes = [
  {
    path:'interpreters',
    component:InterpreterComponent,
    canActivate:[InterpreterGuard],
    children:[
      {
        path:'',
        redirectTo:'/interpreters/list',
        pathMatch:'full'
      },
      {
        path:'list',
        component:ListComponent,
      },
      {
        path:'add',
        component:AddComponent
      }
    ]
  },
  {
    path:'interpreters/auth/login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpreterRoutingModule { 
}
