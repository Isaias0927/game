import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriaPageRoutingModule } from './historia-routing.module';

import { HistoriaPage } from './historia.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { ComponentesPageModule } from "../componentes/componentes.module";
import { HeaderComponent } from 'src/app/componentes/header/header.component';

@NgModule({
    declarations: [HistoriaPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HistoriaPageRoutingModule,
        ComponentesModule,
        ComponentesPageModule
    ]
})
export class HistoriaPageModule {}
