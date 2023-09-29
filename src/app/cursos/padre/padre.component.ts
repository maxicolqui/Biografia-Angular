import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/Registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{

  habilitarForm:boolean=false;
  listaAlumno: any[]=[];

  listaRegistro: Registro[] = [];

  constructor( private registroServide: RegistroService ){

  }

  ngOnInit(): void {
    this.registroServide.getAll().subscribe( response =>{
      console.log('lista de Registro: ',response);
      this.listaRegistro = response;
      console.log("lista de registro del ts: ",this.listaRegistro)
    }

    )
  }

  mostrarFormulario():void{
    this.habilitarForm=true;
  }

  obtenerAlumno():void{

    this.registroServide.getAll().subscribe( response =>{
      console.log('lista de Registro: ',response);
      this.listaRegistro = response;
      console.log("lista de registro del ts: ",this.listaRegistro)
    }

    )


  }

  getHabilitar(habilitar:boolean):void{
    this.habilitarForm=habilitar;
  }

}
