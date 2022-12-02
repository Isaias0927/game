import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentesPageRoutingModule } from './componentes-routing.module';

import { ComponentesPage } from './componentes.page';
import { HeaderComponent } from 'src/app/componentes/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesPageRoutingModule
  ],
  declarations: [ComponentesPage, HeaderComponent],
  exports: [HeaderComponent]
})
export class ComponentesPageModule {}
