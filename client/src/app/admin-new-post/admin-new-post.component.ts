import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-new-post',
  templateUrl: './admin-new-post.component.html',
  styleUrls: ['./admin-new-post.component.css']
})
export class AdminNewPostComponent {
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
