import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publicacion } from './publicacion.inteface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3001/post';
  private iframeRegex = /<iframe.*src=/i;


  constructor(private http: HttpClient) { }


  obtenerPublicaciones(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(this.apiUrl).pipe(
      map((publicaciones: Publicacion[]) => {
        // Ordenar las publicaciones de la más nueva a la más vieja según la fecha de creación
        return publicaciones.sort((a, b) => new Date(b.fechaCreacion).getTime() - new Date(a.fechaCreacion).getTime());
      })
    );
  }

  // Método para ajustar el ancho del iframe en el enlace proporcionado y eliminar las barras invertidas
  ajustarAnchoIframe(iframeLink: string, width: number): string {
    const newIframeLink = iframeLink.replace(/width=\d+/, `width=${width}`);
    return newIframeLink.replace(/\\/g, ''); // Eliminar todas las barras invertidas
  }

  guardarPublicacion(iframeLink: string): Observable<any> {
    if (!this.iframeRegex.test(iframeLink)) {
      // Si el enlace de iframe no contiene el patrón adecuado, devolver un error
      return new Observable((observer) => {
        observer.error('El enlace no es un iframe válido');
      });
    }

    return this.http.post<any>(this.apiUrl, { iframeLink });
  }

  eliminarPublicacion(publicacionId: string): Observable<any> {
    const url = `${this.apiUrl}/${publicacionId}`;
    return this.http.delete<any>(url);
  }
}
