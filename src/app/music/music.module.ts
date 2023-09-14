import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoComponent } from './grupo/grupo.component';
import { AlbumComponent } from './album/album.component';
import { FormsModule } from '@angular/forms';
import { PaginaComponent } from './pagina/pagina.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { Pagina4Component } from './pagina4/pagina4.component';



@NgModule({
  declarations: [
    GrupoComponent,
    AlbumComponent,
    PaginaComponent,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    GrupoComponent,
    AlbumComponent
  ]
})
export class MusicModule { }
