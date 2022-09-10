import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPage {
  formLogin!: FormGroup

  constructor(
    public navController: NavController,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      login: ['', [
       Validators.required,
       Validators.email
      ]],
      senha: ['', [
        Validators.required,
        Validators.min(4)
      ]]
    })
  }

  async login() {
    await this.authService.setAuth(this.formLogin.value)
    this.authService.post('/login').subscribe({
      next: (data) => {
        if (
          data?.email == this.formLogin.controls['login'].value &&
          data?.senha == this.formLogin.controls['senha'].value
        ) {
          this.navController.navigateRoot('formulario')
        } else {
          alert('Usuário não existe');
        }
      },
      error: (err) => {
          console.log(err.message);
      },
  });

  }

}
