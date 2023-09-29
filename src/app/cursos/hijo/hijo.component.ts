import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Registro } from 'src/app/models/Registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Output() habilitarEmmitter: EventEmitter<any> = new EventEmitter();



  nombre:string='';
  numero:number;
  curso:string='';
  gmail: string='';
  descripcion:string='';


  constructor(private registroServide: RegistroService) {

  }

  ngOnInit(): void {

  }

  crear(): void {
    let registro: Registro = {
      id:null,
      nombre: this.nombre,
      numero:this.numero,
      curso:this.curso,
      gmail:this.gmail,
      descripcion:this.descripcion,
    }
  
    this.registroServide.crear(registro).subscribe(
      response =>{
        console.log('respuesta =>',response)
      }
    )

    this.habilitarEmmitter.emit(false)
  }

  cancelar(): void {
    console.log("se cancelo")
  }
}
