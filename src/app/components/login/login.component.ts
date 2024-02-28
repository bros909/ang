// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    // Simple check to ensure both username and password are provided
    if (this.username.trim() !== '' && this.password.trim() !== '') {
      // Save to local storage
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password);

      // Navigate to empty page
      this.router.navigate(['/home']);
    } else {
      alert('Please enter both username and password');
    }
  }
}
