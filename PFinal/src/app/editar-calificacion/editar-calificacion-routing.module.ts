import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarCalificacionPage } from './editar-calificacion.page';

const routes: Routes = [
  {
    path: '',
    component: EditarCalificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarCalificacionPageRoutingModule {}
