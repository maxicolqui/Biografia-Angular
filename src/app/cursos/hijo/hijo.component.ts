import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Output() formularioEmmitter: EventEmitter<any> = new EventEmitter();
  @Output() habilitarEmmitter: EventEmitter<any> = new EventEmitter();

  formularioAlumno={
    nombre:null,
    numero:null,
    curso:null,
    gmail:null,
  }

  constructor(){

  }
  
  ngOnInit(): void {
    
  }

  guardar():void{
    console.log("formulario Alumno:", this.formularioAlumno);
    this.formularioEmmitter.emit(this.formularioAlumno);
    // se limpia el formulario
    this.formularioAlumno={
      nombre:null,
      numero:null,
      curso:null,
      gmail:null,
    }

    this.habilitarEmmitter.emit(false)
  }

  cancelar():void{
    console.log("se cancelo")
  }
}
