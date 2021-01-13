import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConformacionmensajePageRoutingModule } from './conformacionmensaje-routing.module';

import { ConformacionmensajePage } from './conformacionmensaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConformacionmensajePageRoutingModule
  ],
  declarations: [ConformacionmensajePage]
})
export class ConformacionmensajePageModule {}
