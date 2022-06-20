import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarAsignaturaPageRoutingModule } from './editar-asignatura-routing.module';

import { EditarAsignaturaPage } from './editar-asignatura.page';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarAsignaturaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [EditarAsignaturaPage]
})
export class EditarAsignaturaPageModule {}
