import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publicacion } from './publicacion.inteface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3001/post';
  private iframeRegex = /<iframe.*src=/i;


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
    if (!this.iframeRegex.test(iframeLink)) {
      // Si el enlace de iframe no contiene el patrón adecuado, devolver un error
      return new Observable((observer) => {
        observer.error('El enlace no es un iframe válido');
      });
    }

    return this.http.post<any>(this.apiUrl, { iframeLink });
  }
  eliminarPublicacion(publicacionId: string) {
    // Aquí llamas al servicio para eliminar la publicación por su ID
    this.postService.eliminarPublicacion(publicacionId).subscribe(
      (res) => {
        console.log(res);
        // Actualizar la lista de publicaciones después de eliminar la publicación
        this.getPublicaciones();
        Swal.fire('Éxito', 'La publicación ha sido eliminada exitosamente.', 'success');
      },
      (error) => {
        console.error('Error al eliminar la publicación:', error);
        Swal.fire('Error', 'Ha ocurrido un error al eliminar la publicación.', 'error');
      }
    );
  }
}
