import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamerRoutingModule } from './streamer-routing.module';
import { StreamerComponent } from './streamer.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './auth/login/login.component';

//services
import {RestFulService} from "./shared/services/restFul.service";
import {StreamerAuthGuard} from "./shared/streamer-auth.guard";
import {CookieService} from "ngx-cookie-service";

import { LoadingComponent } from './components/loading/loading.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [StreamerComponent, ListComponent, AddComponent, DetailComponent, LoginComponent, LoadingComponent, EditComponent],
  imports: [
    CommonModule,
    StreamerRoutingModule,
    FormsModule
  ],
  providers:[
    RestFulService,
    StreamerAuthGuard,
    CookieService
  ]
})
export class StreamerModule { }
