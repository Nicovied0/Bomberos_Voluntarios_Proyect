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
    return this.http.get<Publicacion[]>(this.apiUrl);
  }

  // Método para ajustar el ancho del iframe en el enlace proporcionado y eliminar las barras invertidas
  ajustarAnchoIframe(iframeLink: string, width: number): string {
    const newIframeLink = iframeLink.replace(/width=\d+/, `width=${width}`);
    return newIframeLink.replace(/\\/g, ''); // Eliminar todas las barras invertidas
  }

  guardarPublicacion(iframeLink: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { iframeLink });
  }


}
