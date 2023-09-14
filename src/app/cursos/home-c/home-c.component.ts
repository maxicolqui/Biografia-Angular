import { Component, OnInit } from '@angular/core';
import { listaMateria} from 'src/app/data/datos';
import { Materia} from 'src/app/models/musica';

@Component({
  selector: 'app-home-c',
  templateUrl: './home-c.component.html',
  styleUrls: ['./home-c.component.css']
})
export class HomeCComponent implements OnInit {

  listaMaterias:Materia[] = listaMateria;
  lista: Materia[]= [];
  mensaje="Python";

  constructor(){
  }
  ngOnInit(): void {
    console.log(this.listaMaterias)
    this.listaMaterias.forEach(m => {
      if (m.id==2) {
        console.log(m);
      }
    });
    console.log(this.listaMaterias)

    this.lista = Object.values(this.listaMaterias);

    
  }

  buscar():void{
    console.log(listaMateria);
    let listaMaterias=this.listaMaterias.filter(p => p.id >= 3)
    console.log(listaMaterias)
  }
}
