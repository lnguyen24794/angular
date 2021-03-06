import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { StreamerComponent } from './streamer.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './auth/login/login.component';
import { EditComponent } from './edit/edit.component';
//services 
import {StreamerAuthGuard} from "./shared/streamer-auth.guard";

const routes: Routes = [
  {
    path:'streamers',
    component:StreamerComponent,
    canActivate:[StreamerAuthGuard],
    children:[
      {
        path:'',
        redirectTo:'list',
        pathMatch:'full'
      },
      {
        path:'add',
        component:AddComponent
      },
      {
        path:"list",
        component:ListComponent
      },
      {
        path:'edit/:id',
        component:EditComponent
      },
      {
        path:"info/:id",
        component:DetailComponent
      },
      
    ]
  },
  {
    path:'streamers/auth/login',
    component:LoginComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamerRoutingModule { }
