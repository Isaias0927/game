import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtajosPageRoutingModule } from './atajos-routing.module';

import { AtajosPage } from './atajos.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { ComponentesPageModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtajosPageRoutingModule,
    ComponentesModule,
    ComponentesPageModule
  ],
  declarations: [AtajosPage]
})
export class AtajosPageModule {}
