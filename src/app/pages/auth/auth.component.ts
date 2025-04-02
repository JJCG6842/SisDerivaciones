import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'




@Component({
  selector: 'app-auth',
  imports: [CommonModule,
    FormsModule,MatButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export default class AuthComponent {

  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      const user = this.authService.getCurrentUser();
      switch(user?.role) {
        case 'admin':
          this.router.navigate(['/admin-dashboard']);
          break;
        case 'profe':
          this.router.navigate(['/docente']);
          break;
        case 'tutor':
          this.router.navigate(['/tutor']);
          break;
      }
    } else {
      this.error = 'Credenciales inválidas';
    }
  }
  
}
