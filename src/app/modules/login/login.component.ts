import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from './../../services/auth/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthorizationService
  ) {
    this.buildForm();
  }



  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    //si el formulario es valido
    if (this.formLogin.valid) {
      // entonces necesito sus valores
      const value = this.formLogin.value;
      //se envian los parametros

      this.authService.login(value.email, value.password)
        //si todo sale bien , lo mando a mi pagina principal
        .then(() => {

          this.router.navigate(['/']);
          // alert('Ingresaste correctamente ');
        })
        //si no es valido mostrar mensaje
        .catch(() => {
          alert('Los datos que ingresaste son invalidos  :( ');
        });
    }
  }

  private buildForm() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

   async onGoogle() {

    try {
      this.authService.loginGoogle();

    }
    catch (error) {
      console.log(error)
    }

  }


}

