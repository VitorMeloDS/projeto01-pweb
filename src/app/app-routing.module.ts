import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPage } from './pages/formulario/formulario.component';
import { LoginPage } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'formulario', component: FormularioPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
