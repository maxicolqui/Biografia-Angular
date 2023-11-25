import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyComponent } from './family/family.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MioComponent } from './mio/mio.component';
import { VidaComponent } from './vida/vida.component';
import { HomeModule } from '../home/home.module';
import { AdmirationModule } from '../admiration/admiration.module';



@NgModule({
  declarations: [
    FamilyComponent,
    GalleryComponent,
    MioComponent,
    VidaComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    AdmirationModule
  ],
  exports:[
    FamilyComponent,
    GalleryComponent,
    MioComponent,
    VidaComponent
  ]
})
export class SharedModule { }
