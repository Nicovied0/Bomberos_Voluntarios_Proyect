import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/Post.service';
import { Publicacion } from '../Services/publicacion.inteface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {

  constructor(private router: Router, private postService: PostService, private sanitizer: DomSanitizer) { }
  publicaciones: Publicacion[] = [];

  ngOnInit() {
    this.getPublicaciones();
  }

  getPublicaciones() {
    this.postService.obtenerPublicaciones().subscribe(
      (publicaciones: Publicacion[]) => {
        this.publicaciones = publicaciones;
        console.log(publicaciones);
      },
      (error) => {
        console.error('Error al obtener las publicaciones:', error);
      }
    );
  }

  getSafeIframeUrl(iframeLink: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(iframeLink);
  }

  goNew() {
    this.router.navigate(['/panelAdmin/NewPost']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  eliminarPublicacion(publicacionId: string) {
    this.postService.eliminarPublicacion(publicacionId).subscribe(
      () => {
        // Eliminar la publicación del array de publicaciones
        this.publicaciones = this.publicaciones.filter((publicacion) => publicacion._id !== publicacionId);
        Swal.fire('Éxito', 'La publicación ha sido eliminada exitosamente.', 'success');
      },
      (error) => {
        console.error('Error al eliminar la publicación:', error);
        Swal.fire('Error', 'Ha ocurrido un error al eliminar la publicación.', 'error');
      }
    );
  }
}
