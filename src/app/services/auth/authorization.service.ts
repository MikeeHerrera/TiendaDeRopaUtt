import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
@Injectable()
export class AuthorizationService {
  // Atributos
  data: any;
  dataUser: any;
  auth: boolean;
  response: any;
  user: any;
  isLoggedIn: boolean;
  redirectUrl: string;
  userName:any;


  constructor(private afAuth: AngularFireAuth , private router: Router) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));

        this.userName = user.displayName;
        this.cargarData();
      } else {
        localStorage.setItem('user', null);
        this.isLoggedIn = false;
      }
    });
  }
    // obtiene los datos del localStorage en caso de que exista un registro
    // en el cache del navegador
    cargarData() {
      this.data = localStorage.getItem('user');
      this.dataUser = JSON.parse(this.data);
      console.log(this.dataUser)
    }
    // Método genérico para iniciar sesión con servicios
    async loginWithInstance(instance) {
      try {
        await this.afAuth.signInWithPopup(instance);
        this.router.navigate(['/']);
      } catch (error) {
      }
    }


  //iniciar sesion
  async login(email: string, password: string) {
    try {
      return this.afAuth.signInWithEmailAndPassword(email, password).then((res)=>{
        this.dataUser = res.user;
        console.log(res);
      }).finally(()=> {
        this.isLoggedIn = true;
      });
      this.router.navigate(['/']);
    }
    catch (error) {
      console.log(error)
    }

  }

  //crear un usuario
  async createUser(email: string, password: string) {
    try {
      return this.afAuth.createUserWithEmailAndPassword(email, password);
    }

    catch (error) {
      console.log(error)
    }
  }


  async logout() {


    await this.afAuth.signOut();
     localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    }


  //hay un usuario
  hasUser() {

    return this.afAuth.authState;

  }

  //iniciar sesion con google
  async loginGoogle()  {
    let provider = new firebase.default.auth.GoogleAuthProvider();
      this.loginWithInstance(provider);

  }

}
