import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{

  habilitarForm:boolean=false;
  listaAlumno: any[]=[];

  constructor(){

  }

  ngOnInit(): void {
    
  }

  mostrarFormulario():void{
    this.habilitarForm=true;
  }

  obtenerAlumno(alumno:any):void{

    let nuevo = Object.assign({},alumno);
    console.log("llego el alumno:",alumno);
    //cargar en el array de alumnos
    this.listaAlumno.push(nuevo);
    console.log(this.listaAlumno)


  }

  getHabilitar(habilitar:boolean):void{
    this.habilitarForm=habilitar;
  }

}
