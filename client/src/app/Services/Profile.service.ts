import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

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
      console.log("No se encontró un token en el localStorage");
      return of(null); // Devolver un Observable que emite un valor nulo
    }
    // Configurar el encabezado con el token
    const headers = new HttpHeaders().set('token', token);

    // Realizar la solicitud HTTP con el encabezado
    return this.http.get<any>(this.baseUrl, { headers });
  }

  updateProfileData(profileData: any): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      // Manejo de error: No se encontró un token en el localStorage
      console.log('Token no proporcionado');
      return of(null); // Devolver un Observable que emite un valor nulo
    }

    // Configurar el encabezado con el token
    const headers = new HttpHeaders().set('token', token);

    // Realizar la solicitud HTTP PUT con los nuevos datos del perfil
    return this.http.put<any>(`${this.baseUrl}/edit`, profileData, { headers }).pipe(
      catchError((error) => {
        console.log('Error en la solicitud HTTP para obtener el perfil:', error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Hubo un error',
          showConfirmButton: false,
          timer: 1500
        });
        // Puedes manejar el error aquí, como mostrar un mensaje de error o realizar alguna acción
        return throwError('Ha ocurrido un error al obtener el perfil');
      })
    )

  }

}
