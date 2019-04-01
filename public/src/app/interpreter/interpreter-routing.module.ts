import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InterpreterComponent} from "./interpreter.component";
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
const routes: Routes = [
  {
    path:'interpreters',
    component:InterpreterComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpreterRoutingModule { 
}
