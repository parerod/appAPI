import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [DetalleComponent,ListadoComponent],
  exports: [DetalleComponent,ListadoComponent],
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule
  ]
})
export class ComponentsModule { }
