import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
<<<<<<< HEAD
import * as firebase from 'firebase/app';
=======
>>>>>>> 805dab35150855e311e78d7e4dbeef803aa0c48b
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
      err => reject(err));
    });
  }

<<<<<<< HEAD
  signInWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signInWithGithub() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    );
  }

  signInWithTwitter() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }


  signInWithFacebook() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }


=======
>>>>>>> 805dab35150855e311e78d7e4dbeef803aa0c48b
  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
