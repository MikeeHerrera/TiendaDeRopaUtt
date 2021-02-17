import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import * as firebase from 'firebase/app';
import 'firebase/auth';
@Injectable()
export class AuthorizationService {




  constructor(private afAuth: AngularFireAuth) {

  }
  async login(email: string, password: string) {
    try {
      return this.afAuth.signInWithEmailAndPassword(email, password);
    }
    catch (error) {
      console.log(error)
    }

  }


  async createUser(email: string, password: string) {
    try {
      return this.afAuth.createUserWithEmailAndPassword(email, password);
    }

    catch (error) {
      console.log(error)
    }
  }


  async logout() {
    try {


      return this.afAuth.signOut();
    }

    catch (error) {
      console.log(error)
    }
  }
  //hay un usuario
  hasUser() {

    return this.afAuth.authState;
      // .subscribe(user => {
      //   console.log(user == null);
      // });

  }
  async loginGoogle() {
    try {
      return this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider())
        .then(console.log);
    }
    catch (error) {
      console.log(error);
    }
  }

}
