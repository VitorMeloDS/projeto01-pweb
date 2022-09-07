import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPage {
  formLogin!: FormGroup

  constructor(
    public navController: NavController,
    private formBuilder: FormBuilder
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

  login() {
    console.log(this.formLogin.value)
    this.navController.navigateRoot('formulario')
  }

}
