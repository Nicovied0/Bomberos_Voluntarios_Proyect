import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:3001/auth/profile';

  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      // Manejo de error: No se encontró un token en el localStorage
      console.log("No se encontró un token en el localStorage")
    }

    // Configurar el encabezado con el token
    const headers = new HttpHeaders().set('token', token!);

    // Realizar la solicitud HTTP con el encabezado
    return this.http.get<any>(this.baseUrl, { headers });
  }
}
