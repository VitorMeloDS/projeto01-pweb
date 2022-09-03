import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPage {

  constructor(
    public navController: NavController,
    public formBuilder: FormBuilder,
    public form: FormGroup
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  login() {
    this.navRoute()
  }

  navRoute() {
    console.log(this.form.controls['login'].value)
    console.log('chegou')
    this.navController.navigateRoot('formulario')
  }

}
