import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'iprofesor',
    loadChildren: () => import('./iprofesor/iprofesor.module').then( m => m.IProfesorPageModule)
  },
  {
    path: 'escuela',
    loadChildren: () => import('./escuela/escuela.module').then( m => m.EscuelaPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },
  {
    path: 'registrar-a',
    loadChildren: () => import('./registrar-a/registrar-a.module').then( m => m.RegistrarAPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'calificaciones',
    loadChildren: () => import('./calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  },
  {
    path: 'registrarcalificaciones',
    loadChildren: () => import('./registrarcalificaciones/registrarcalificaciones.module').then( m => m.RegistrarcalificacionesPageModule)
  },
  {
    path: 'editar-calificacion',
    loadChildren: () => import('./editar-calificacion/editar-calificacion.module').then( m => m.EditarCalificacionPageModule)
  },
  {
    path: 'editar-asignatura',
    loadChildren: () => import('./editar-asignatura/editar-asignatura.module').then( m => m.EditarAsignaturaPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
