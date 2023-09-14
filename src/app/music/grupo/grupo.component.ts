import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listaMusica } from 'src/app/data/datos';
import { Musica } from 'src/app/models/musica';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  listaMusica: Musica[] = listaMusica;
  listaR: Musica[] = [];
  habilitarMsj: boolean = false;
  habilitarMsj2: boolean = false;

  titulo: string = 'musica';
  msjExitoso = 'Grupo Encontrado.!';
  msjError = 'Grupo no incluido en la lista.!';
  styleBotton: string = 'btn btn-primary';
  styleBotton2: string = 'btn btn-success';
  habilitar: boolean = true;
  grupoMusica: string = '';

  constructor(private route: Router) {
    console.log('se ejecuto');
    console.log(this.titulo);


  }

  ngOnInit(): void {
    console.log('se oninit');

  }

  continuar(): void {
    console.log('click');
    this.styleBotton2;
    this.habilitar = false;
  }

  buscar(): void {
    //buscar
    console.log(this.grupoMusica);
    this.listaR = this.listaMusica.filter(m => m.titulo.toUpperCase().includes(this.grupoMusica.toUpperCase()));
    console.log(this.listaR);
    if (this.listaR.length == 0) {
      this.habilitarMsj = false;
      this.habilitarMsj2 = true;
    } else {
      this.habilitarMsj = true;
      this.habilitarMsj2 = false;
    }

  }

  verMusica(peli: Musica): void {
    console.log(peli.id);

    switch (peli.id) {
      case 1:
        this.route.navigate(['pagina']);
        break;
      case 2:
        this.route.navigate(['pagina2']);
        break
      case 3:
        this.route.navigate(['pagina3']);
        break
      case 4:
        this.route.navigate(['pagina4']);
        break
      default:
        break;
    }




  }
}
