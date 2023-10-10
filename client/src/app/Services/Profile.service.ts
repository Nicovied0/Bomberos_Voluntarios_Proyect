import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
declare const Swal: any;


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'https://bvscback.vercel.app/auth/profile';

  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      return of(null);
    }
    const headers = new HttpHeaders().set('token', token);

    return this.http.get<any>(this.baseUrl, { headers });
  }

  updateProfileData(profileData: any): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      return of(null);
    }

    const headers = new HttpHeaders().set('token', token);

    return this.http.put<any>(`${this.baseUrl}/edit`, profileData, { headers }).pipe(
      catchError((error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Hubo un error',
          showConfirmButton: false,
          timer: 1500
        });
        return throwError('Ha ocurrido un error al obtener el perfil');
      })
    )

  }

}
