import { Component } from '@angular/core';
import { PostService } from '../Services/Post.service';

@Component({
  selector: 'app-admin-new-post',
  templateUrl: './admin-new-post.component.html',
  styleUrls: ['./admin-new-post.component.css']
})
export class AdminNewPostComponent {
  iframeLink: string = '';

  constructor(private postService: PostService) { }

  guardarPublicacion() {
    const iframeLinkAdjusted = this.postService.ajustarAnchoIframe(this.iframeLink, 500); // Ajustar el ancho a 500
    this.postService.guardarPublicacion(iframeLinkAdjusted).subscribe(
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
