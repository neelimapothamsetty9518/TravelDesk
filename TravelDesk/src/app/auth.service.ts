import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5116/api/Auth'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login-form`, { email, password });
  }

  logout() {
    // Remove user token from local storage or session storage
    localStorage.removeItem('token');
    localStorage.removeItem('role')
  }

  isAuthenticated(): boolean {
    // Check if user is authenticated based on token presence
    return !!localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }



}