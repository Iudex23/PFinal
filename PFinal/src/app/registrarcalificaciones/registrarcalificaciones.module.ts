import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarcalificacionesPageRoutingModule } from './registrarcalificaciones-routing.module';

import { RegistrarcalificacionesPage } from './registrarcalificaciones.page';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarcalificacionesPageRoutingModule,
    ComponentesModule
  ],
  declarations: [RegistrarcalificacionesPage]
})
export class RegistrarcalificacionesPageModule {}
