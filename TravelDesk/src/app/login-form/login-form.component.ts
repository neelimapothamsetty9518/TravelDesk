import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-login-form',
  template: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  email: string='';
  password: string='';
  error: string='';

  constructor(private authService: AuthService, private router: Router,private dataservice:DataserviceService) { }

  
    login() {
      this.authService.login(this.email, this.password).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
  
          switch (response.role) {
            case 'Admin':
              this.router.navigate(['/admin-page']);
              break;
            case 'Manager':
              this.router.navigate(['/manager']);
              break;
            case 'Employee':
              this.router.navigate(['/request-form']);
              break;
            default:
              this.error = 'Unknown role. Please contact support.';
              break;
          }
        },
        error: (error) => {
          this.error = 'Invalid credentials. Please try again.';
          console.error('Login error:', error);
        }
      });
    }
  }




