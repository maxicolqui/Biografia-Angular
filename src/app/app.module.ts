import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './error/error.module';
import { MusicModule } from './music/music.module';
import { AdmirationModule } from './admiration/admiration.module';
import { CursosModule } from './cursos/cursos.module';
import { RegistroService } from './services/registro.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    ErrorModule,
    MusicModule,
    AdmirationModule,
    CursosModule,
    HttpClientModule

    
    
  ],
  providers: [RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
