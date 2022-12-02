import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtajosPage } from './atajos.page';

const routes: Routes = [
  {
    path: '',
    component: AtajosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtajosPageRoutingModule {}
