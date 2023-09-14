import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyComponent } from './family/family.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MioComponent } from './mio/mio.component';
import { VidaComponent } from './vida/vida.component';



@NgModule({
  declarations: [
    FamilyComponent,
    GalleryComponent,
    MioComponent,
    VidaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FamilyComponent,
    GalleryComponent,
    MioComponent,
    VidaComponent
  ]
})
export class SharedModule { }
