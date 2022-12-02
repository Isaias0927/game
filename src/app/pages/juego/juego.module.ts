import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegoPageRoutingModule } from './juego-routing.module';

import { JuegoPage } from './juego.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { ComponentesPageModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegoPageRoutingModule,
    ComponentesModule,
    ComponentesPageModule
  ],
  declarations: [JuegoPage]
})
export class JuegoPageModule {}
