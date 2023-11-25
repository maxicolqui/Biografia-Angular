import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ContactosComponent } from './contactos/contactos.component';



@NgModule({
  declarations: [
    AlumnosComponent,
    ContactosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DatosModule { }
