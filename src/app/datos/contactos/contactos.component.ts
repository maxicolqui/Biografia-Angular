import { Component } from '@angular/core';
import { listaContactos } from 'src/app/data/datos-contactos';
import { Contactos } from 'src/app/models/contactos';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {
    listaC: Contactos[]= listaContactos;

    constructor(){

    }
    ngOnInit(): void {
      console.log(listaContactos);
      
    }

}
