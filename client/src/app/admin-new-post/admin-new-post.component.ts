import { Component } from '@angular/core';
import { PostService } from '../Services/Post.service';
import Swal from 'sweetalert2';

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
        Swal.fire('Éxito', 'La publicación ha sido guardada exitosamente.', 'success');
      },
      (error) => {
        console.error('Error al guardar la publicación:', error);
        Swal.fire('Error', 'Ha ocurrido un error al guardar la publicación.', 'error');
      }
    );
  }
}
