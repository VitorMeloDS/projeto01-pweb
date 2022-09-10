import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      email: ['', Validators.required],
      senha: ['', Validators.required],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
      empresa: ['', Validators.required]
    })
  }

  save() {
    console.log(this.cadastroUsuario.value)
  }

}
