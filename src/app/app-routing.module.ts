import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/login/login.component.module').then(m => m.LoginPageModule) },
  { path: 'formulario', loadChildren: () => import('./pages/formulario/formulario.component.module').then(m => m.FormularioPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
