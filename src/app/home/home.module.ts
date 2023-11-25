import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { RestoMiComponent } from './resto-mi/resto-mi.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { MusicModule } from '../music/music.module';
import { AdmirationModule } from '../admiration/admiration.module';
import { EquipoComponent } from './equipo/equipo.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    SobreMiComponent,
    RestoMiComponent,
    FooterComponent,
    HomeComponent,
    EquipoComponent,

  ],
  imports: [
    CommonModule,
    MusicModule,
    AdmirationModule,
    AppRoutingModule

  ],
  exports:[
    HeaderComponent,
    SliderComponent,
    SobreMiComponent,
    RestoMiComponent,
    FooterComponent,
    HomeComponent,
  ]
})
export class HomeModule { }
