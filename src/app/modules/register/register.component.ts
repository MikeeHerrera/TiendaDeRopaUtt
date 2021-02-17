import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from './../../services/auth/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthorizationService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  //para crear el usuario y una vez creado me mande a login para ingresar los datos
  register(event: Event) {
    event.preventDefault();
    //si el formulario es valido
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.createUser(value.email, value.password)
        .then(() => {
          //una vez creado el usuario  mandar a login
          this.router.navigate(['/login']);

        })


    }
    console.log(this.form.value)
  }

  //validaciones de formulario
  private buildForm() {
    this.form = this.formBuilder.group({

      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


//para Google
  async onGoogle() {

    try {
      this.authService.loginGoogle();

    }
    catch (error) {
      console.log(error)
    }

  }

}
