import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarAsignaturaPage } from './editar-asignatura.page';

const routes: Routes = [
  {
    path: '',
    component: EditarAsignaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarAsignaturaPageRoutingModule {}
