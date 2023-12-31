import { Component } from '@angular/core';
import { PostService } from '../Services/Post.service';
declare const Swal: any;

import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-new-post',
  templateUrl: './admin-new-post.component.html',
  styleUrls: ['./admin-new-post.component.css']
})
export class AdminNewPostComponent {
  iframeLink: string = '';
  iframeValido: boolean = true;

  constructor(private postService: PostService, private router: Router) { }

  guardarPublicacion() {
    if (this.iframeValido) {
      const iframeLinkAdjusted = this.postService.ajustarAnchoIframe(this.iframeLink, 500);
      this.postService.guardarPublicacion(iframeLinkAdjusted).subscribe(
        (res) => {
          this.iframeLink = '';
          Swal.fire('Éxito', 'La publicación ha sido guardada exitosamente.', 'success');
          this.router.navigate(['/noticias']).then(() => {
            window.scrollTo(0, 0);
          });
        },
        (error) => {
          console.error('Error al guardar la publicación:', error);
          Swal.fire('Error', 'Ha ocurrido un error al guardar la publicación.', 'error');
        }
      );
    } else {
      Swal.fire('Error', 'Por favor, ingrese un enlace de iframe válido.', 'error');
    }
  }

  validarIframe() {
    this.iframeValido = this.iframeLink.startsWith('<iframe') && this.iframeLink.endsWith('</iframe>');
  }
}
