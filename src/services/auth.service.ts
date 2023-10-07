import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService  {

  constructor(private afAuth: AngularFireAuth, public router: Router) {}

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut();
  }

  isLoggedIn() {
    return this.afAuth.authState;
  }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map((user: any) => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}