import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarCalificacionPageRoutingModule } from './editar-calificacion-routing.module';

import { EditarCalificacionPage } from './editar-calificacion.page';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarCalificacionPageRoutingModule,
    ComponentesModule
  ],
  declarations: [EditarCalificacionPage]
})
export class EditarCalificacionPageModule {}
