import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { FirebaseService } from './firebaseService';
@Injectable({
  providedIn: 'root',
})
export class AuthService  {
  
  constructor(private afAuth: AngularFireAuth, public router: Router, private firebaseService: FirebaseService) {}

  async login(email: string, password: string) {

    return this.afAuth.signInWithEmailAndPassword(email, password).then(async userCredential => {
      if(userCredential.user){
        await this.loadUserData(userCredential.user.uid)
      }
    });
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      this.clearUserData();
      this.router.navigate(['/login'])
    });
  }

  isLoggedIn() {
    return this.afAuth.authState;
  }

  getUserData() {
    const userData = localStorage.getItem('userData');
  
    return userData ? JSON.parse(userData) : null;
  }

  

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map((user: any) => {
        console.log(user.displayName)
        console.log(user.email)
        console.log(user.uid)
        if (user) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }

  private loadUserData(uid: string) {
    return this.firebaseService.getUserData(uid).then((userData: any) => {
      localStorage.setItem('userData', JSON.stringify(userData));
    });
  }

  private clearUserData() {
    localStorage.removeItem('userData'); 
  }

  
}