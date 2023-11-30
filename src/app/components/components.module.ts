import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [ListadoComponent],
  exports: [ListadoComponent],
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule
  ]
})
export class ComponentsModule { }
