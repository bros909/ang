// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  login(username: string, password: string): boolean {
  
    if (username === 'user' && password === 'password') {
      this.loggedIn = true;
      localStorage.setItem('isLogged', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('isLogged');
  }

  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('isLogged') === 'true';
  }
}
