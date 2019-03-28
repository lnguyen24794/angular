import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Module
import {StreamerModule} from "./streamer/streamer.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StreamerModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
