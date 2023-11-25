import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { VidaComponent } from './shared/vida/vida.component';
import { NotfonComponent } from './error/notfon/notfon.component';
import { AlbumComponent } from './music/album/album.component';
import { PaginaComponent } from './music/pagina/pagina.component';
import { Pagina2Component } from './music/pagina2/pagina2.component';
import { Pagina3Component } from './music/pagina3/pagina3.component';
import { Pagina4Component } from './music/pagina4/pagina4.component';
import { HomeCComponent } from './cursos/home-c/home-c.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path: 'vida', component: VidaComponent},
  {path: 'musica', component: AlbumComponent},
  {path: 'pagina', component: PaginaComponent},
  {path: 'pagina2', component: Pagina2Component},
  {path: 'pagina3', component: Pagina3Component},
  {path: 'pagina4', component: Pagina4Component},
  {path:'curso',component:HomeCComponent},
  {path: '**', component:NotfonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
