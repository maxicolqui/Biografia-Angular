import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HomeCComponent } from './home-c/home-c.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';



@NgModule({
  declarations: [
    HomeCComponent,
    PadreComponent,
    HijoComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
  ],
  exports:[
    HomeCComponent,
    PadreComponent,
    HijoComponent,
    
  ]
})
export class CursosModule { }
