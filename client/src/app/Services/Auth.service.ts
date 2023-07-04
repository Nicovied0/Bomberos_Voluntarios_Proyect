import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3001/auth';

  constructor(private http: HttpClient) { }

  register(name: string, email: string, password: string) {
    const body = { name, email, password };
    return this.http.post(`${this.baseUrl}/register`, body);
  }

  login(email: string, password: string) {
    const body = { email, password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }
}
