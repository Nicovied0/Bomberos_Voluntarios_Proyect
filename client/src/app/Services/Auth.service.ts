import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';


export interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://bvscback.vercel.app/auth';

  constructor(private http: HttpClient) { }

  register(name: string, email: string, password: string): Observable<any> {
    const body = { name, email, password };
    return this.http.post(`${this.baseUrl}/register`, body);
  }

  login(email: string, password: string): Observable<LoginResponse> {
    const body = { email, password };
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, body);
  }

  adminUser() {
    const usuarioLogeado = JSON.parse(localStorage.getItem('profile') || '[]')

    if (usuarioLogeado.role === 'administrador' || usuarioLogeado.role === 'editor') {
      return true;
    }
    return false;
  }

  // Agrega los siguientes métodos para mostrar mensajes de SweetAlert
  mostrarMensajeExito(titulo: string, mensaje: string) {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'success',
      timer: 3000,
      showConfirmButton: false
    });
  }

  mostrarMensajeError(titulo: string, mensaje: string) {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'error',
      showConfirmButton: true
    });
  }

}

