import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConformacionmensajePage } from './conformacionmensaje.page';

const routes: Routes = [
  {
    path: '',
    component: ConformacionmensajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConformacionmensajePageRoutingModule {}
