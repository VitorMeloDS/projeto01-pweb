import { AuthService } from './../../services/login/login.service';
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
    private FormBuilder: FormBuilder,
    private authService: AuthService
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
  
  async save() {
    this.authService.postCadastro('/cadastro', this.cadastroUsuario.value).subscribe({
      next: () => alert('Usuário cadastrado'),
      error: (e) => alert(e.message)
    })
  }

}
