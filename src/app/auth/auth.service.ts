import { Injectable, inject } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  authState,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { UserInfo } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);

  async login(email: string, password: string): Promise<any> {
    try {
      const response = await signInWithEmailAndPassword(this.auth, email, password);
      localStorage.setItem('uuid', response.user.uid);
      return response
    } catch (error) {
      throw error;
    }
  }

  getCurrentUser(): Observable<UserInfo | null> {
    return authState(this.auth);
  }

  logout(): Promise<void> {
    return signOut(this.auth);
  }
}
