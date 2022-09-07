import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.componet.scss']
})
export class FormularioPage {
  public cadastroUsuario!: FormGroup;

  constructor(
    private FormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cadastroUsuario = this.FormBuilder.group({

    })
  }

  save() {
    alert('teste')
  }

}
