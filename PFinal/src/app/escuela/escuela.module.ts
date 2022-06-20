import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscuelaPageRoutingModule } from './escuela-routing.module';

import { EscuelaPage } from './escuela.page';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscuelaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [EscuelaPage]
})
export class EscuelaPageModule {}
