import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { UserInfo } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private afAuth = inject(AngularFireAuth);

  async login(email: string, password: string): Promise<any> {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password,
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  getCurrentUser(): Observable<UserInfo | null> {
    return this.afAuth.authState;
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
