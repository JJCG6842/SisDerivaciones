import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  username: string;
  role: 'admin' | 'profe' | 'tutor';
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  login(username: string, password: string): boolean {
    // Simulación de login
    const users: User[] = [
      { username: 'admin', role: 'admin' },
      { username: 'profe', role: 'profe' },
      { username: 'tutor', role: 'tutor' }
    ];

    const user = users.find(u => u.username === username);
    if (user && password === '12345') { // Contraseña simulada
      this.currentUserSubject.next(user);
      return true;
    }
    return false;
  }

  logout() {
    this.currentUserSubject.next(null);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
  
}
