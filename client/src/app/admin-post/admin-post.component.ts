import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent {

  iframeLink: string = '';

  constructor(private http: HttpClient) { }

  guardarPublicacion() {
    this.http.post('http://localhost:3001/post', { iframeLink: this.iframeLink }).subscribe(
      (res) => {
        console.log(res);
        this.iframeLink = '';
        // Agregar aquí una notificación o mensaje de éxito al usuario
      },
      (error) => {
        console.error('Error al guardar la publicación:', error);
        // Agregar aquí una notificación o mensaje de error al usuario
      }
    );
  }
}
