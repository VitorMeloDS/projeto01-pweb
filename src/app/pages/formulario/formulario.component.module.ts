import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FormularioPage } from './formulario.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormularioPage
      }
    ])
  ],
  declarations: [FormularioPage]
})
export class FormularioPageModule {}
