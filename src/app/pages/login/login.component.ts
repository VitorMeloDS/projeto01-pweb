import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPage {
  form!: FormGroup

  constructor(
    public navController: NavController,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  login() {
    console.log(this.form.controls['login'].value)
    console.log('chegou')
    this.navController.navigateRoot('formulario')
  }

}
