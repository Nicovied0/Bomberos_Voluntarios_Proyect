import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publicacion } from './publicacion.inteface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3001/post';

  constructor(private http: HttpClient) { }

  obtenerPublicaciones(): Observable<Publicacion[]> {
    // Obtener el ancho de la pantalla actual

    // Realizar la solicitud HTTP y devolver el resultado
    console.log("aca")
    return this.http.get<Publicacion[]>(`${this.apiUrl}`);
  }

  guardarPublicacion(iframeLink: string): Observable<any> {

    return this.http.post<any>(this.apiUrl, { iframeLink });
  }
}
