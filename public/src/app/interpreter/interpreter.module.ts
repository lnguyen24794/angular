import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { InterpreterRoutingModule } from './interpreter-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { InterpreterComponent } from './interpreter.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [ListComponent, AddComponent, InterpreterComponent, LoadingComponent],
  imports: [
    CommonModule,
    InterpreterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class InterpreterModule { }
